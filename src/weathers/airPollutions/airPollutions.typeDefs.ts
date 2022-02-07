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
    aqi: Int # 대기 질 지수 (1: 매우 좋음, 3: 보통, 5: 매우 나쁨)
  }

  type AirPollutionListComponent {
    co: Float # 일산화탄소
    no: Float # 일산화질소
    no2: Float # 이산화질소
    o3: Float # 오존
    so2: Float # 이산화황
    pm2_5: Float # 미세 입자 물질
    pm10: Float # 굵은 입자상 물질
    nh3: Float # 암모니아
  }

  type AirPollutionData {
    coord: AirPollutionCoord
    list: [AirPollutionList]
  }

  type AirPollutionResponse {
    ok: Boolean!
    error: CoeatherSimpleError
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
