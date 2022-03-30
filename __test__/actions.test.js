import { getValidToken } from "../src/utils/actions";
import "regenerator-runtime/runtime";
import "core-js/stable";
import connection from "../src/utils/connection";
import security from "../src/utils/helpers";
import mockAxios from "jest-mock-axios";

describe("getValidToken", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe("when API call is successful", () => {
    test("should return a token", async () => {
      // Arrange
      const data = { data: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQW5kcmVzIFBhbmlhZ3VhIiwiVXNlciI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDb25zdW1lciIsIm5iZiI6MTY0ODA1NDAyMCwiZXhwIjoxNjQ4MDU0NjIwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM0OCIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzQ4In0.nLxo5y5dcokGe-fkOGI-mf-E9RtEIQXZT8T_EK29dDA" } };
      mockAxios.post.mockResolvedValueOnce(data);

      // Act
      const result = await getValidToken();

      // Assert
      expect(mockAxios.post).toHaveBeenCalledWith(`${connection}/token`, security);
      expect(result).not.toBeNull();
      expect(result.token).not.toBeNull();
      expect(result.token).not.toBeUndefined();
      expect(result.statusResponse).toBeTruthy();
    });
  });
});
