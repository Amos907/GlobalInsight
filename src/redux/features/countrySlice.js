import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  allCountries: {},
  country: {},
  subRegionCountries: {},
  requestErrors: [],
  requestStatus: {
    fetchAllCountriesStatus: "idle",
    fetchCountryStatus: "idle",
    fetchSubRegionCountriesStatus: "idle",
  },
};

export const fetchAllCountries = createAsyncThunk(
  "country/fetchAllCountries",
  async () => {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,subregion"
    );

    return await res.json();
  }
);

export const fetchCountry = createAsyncThunk(
  "country/fetchCountry",
  async (payload) => {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${payload.country_name}`
    );

    return await res.json();
  }
);

export const fetchSubRegionCountries = createAsyncThunk(
  "country/fetchSubRegionCountries",
  async (payload) => {
    const res = await fetch(
      `https://restcountries.com/v3.1/subregion/${payload.subregion}`
    );

    return await res.json();
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllCountries.pending, (state) => {
      state.requestStatus.fetchAllCountriesStatus = "loading";
    });

    builder.addCase(fetchAllCountries.fulfilled, (state, action) => {
      state.requestStatus.fetchAllCountriesStatus = "success";
      state.allCountries = action.payload;
    });

    builder.addCase(fetchAllCountries.rejected, (state, action) => {
      state.requestStatus.fetchAllCountriesStatus = "failled";
      state.requestErrors.push({
        fetchAllCountries: action.error.message,
      });
    });

    builder.addCase(fetchCountry.pending, (state) => {
      state.requestStatus.fetchCountryStatus = "loading";
    });

    builder.addCase(fetchCountry.fulfilled, (state, action) => {
      state.requestStatus.fetchCountryStatus = "success";
      state.country = action.payload;
    });

    builder.addCase(fetchCountry.rejected, (state, action) => {
      state.requestStatus.fetchCountryStatus = "failled";
      state.requestErrors.push({
        fetchCountry: action.error.message,
      });
    });

    builder.addCase(fetchSubRegionCountries.pending, (state) => {
      state.requestStatus.fetchSubRegionCountriesStatus = "loading";
    });

    builder.addCase(fetchSubRegionCountries.fulfilled, (state, action) => {
      state.requestStatus.fetchSubRegionCountriesStatus = "success";
      state.subRegionCountries = action.payload;
    });

    builder.addCase(fetchSubRegionCountries.rejected, (state, action) => {
      state.requestStatus.fetchSubRegionCountriesStatus = "failled";
      state.requestErrors.push({
        fetchSubRegionCountries: action.error.message,
      });
    });
  },
});

export default countrySlice.reducer;
