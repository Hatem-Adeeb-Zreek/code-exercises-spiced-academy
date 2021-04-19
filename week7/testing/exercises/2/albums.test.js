const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("albums names are in alphabetical order", () => {
    spotify.search.mockResolvedValue({
        albums: {
            items: [{ name: "b" }, { name: "c" }, { name: "a" }],
        },
    });

    return getAlbumNames("No Life").then((albumNames) => {
        expect(albumNames).toEqual(["a", "b", "c"]);
    });
});
