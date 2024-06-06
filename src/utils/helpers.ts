import { Country } from "@/types/others";
import axios from "axios";

const setPageTitle = (title: string) => {
  document.title = title
}

const toCurrency = (amount: number, currency: string = 'USD') => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  });

  return formatter.format(amount);
};

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.error("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
          default:
            console.error("An error occurred while getting user location.");
        }
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};

const getCountries = (): Promise<Country[]> => {
  return axios.get("https://restcountries.com/v3.1/all?fields=name,flags")
    .then((response) => {
      const countries: Country[] = response.data.map((country: any) => ({
        name: country.name.common,
        flag: country.flags.png,
      }));
      countries.sort((a: Country, b: Country) => a.name.localeCompare(b.name));
      return countries;
    });
};

const hostSetupValidation = () => {
  console.log("validating")
}

export { setPageTitle, toCurrency, getCountries, getLocation, hostSetupValidation };
