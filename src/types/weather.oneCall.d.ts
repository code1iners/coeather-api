export interface OneCallProps {
  latitude: string;
  longitude: string;
  exclude: "current" | "minutely" | "hourly" | "daily" | "alerts";
}
