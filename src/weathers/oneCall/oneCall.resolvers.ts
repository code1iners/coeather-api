import { Resolvers } from "../../types/resolvers";
import { OneCallProps } from "../../types/weather.oneCall";
import { getRequestUri } from "../../utils/axiosUtils";

const resolvers: Resolvers = {
  Query: {
    oneCall: async (
      _,
      { latitude, longitude, exclude = "current" }: OneCallProps,
      { axios }
    ) => {
      try {
        const uri = getRequestUri("onecall", {
          ...(latitude && { lat: latitude }),
          ...(longitude && { lon: longitude }),
          exclude,
        });

        const { status, statusText, data } = await axios.get(uri);
        // Have a problem?
        if (status !== 200) {
          console.error("[oneCall]", statusText);
          return {
            ok: false,
            error: {
              code: 500,
              message: "Not implement yet.",
            },
          };
        }

        return {
          ok: true,
          data,
        };
      } catch (e) {
        console.error("[oneCall]", e);
        return {
          ok: false,
          error: {
            code: 500,
            message: "Failed getting weather information.",
          },
        };
      }
    },
  },
};

export default resolvers;
