import ax from "axios";

const url =
  "https://opendata.cwa.gov.tw/api/v1/rest/datastore/E-A0015-001?Authorization=CWA-6B2FA6B3-EEB2-49AE-BAE8-F8D8A274ED37&limit=20&format=JSON&AreaName=%E5%AE%9C%E8%98%AD%E7%B8%A3";

const { data } = await ax.get(url);

data["records"]["Earthquake"].forEach((d) => {
  console.log(d["EarthquakeInfo"]["EarthquakeMagnitude"]["MagnitudeValue"]);
});
