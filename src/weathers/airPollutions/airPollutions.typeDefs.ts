import { gql } from "apollo-server-core";

export default gql`
  type AirPollutionCoord {
    lat: Float
    lon: Float
  }

  type AirPollutionList {
    main: AirPollutionListMain
    components: AirPollutionListComponent
    dt: Int
  }

  type AirPollutionListMain {
    aqi: Int
  }

  type AirPollutionListComponent {
    co: Float
    no: Float
    no2: Float
    o3: Float
    so2: Float
    pm2_5: Float
    pm10: Float
    nh3: Float
  }

  type AirPollutionData {
    coord: AirPollutionCoord
    list: [AirPollutionList]
  }

  type AirPollutionResponse {
    ok: Boolean!
    error: SimpleError
    data: AirPollutionData
  }

  type Query {
    getAirPollution(
      latitude: Float!
      longitude: Float!
      start: Int
      end: Int
    ): AirPollutionResponse!
  }
`;
