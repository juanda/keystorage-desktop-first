describe("Crypter", () => {
  const { Crypter } = require("../src/modules/Crypter");
  let crypter
  
  beforeEach(function() {
    crypter = new Crypter("laclave");
  });

  it("Debería encriptar", function() {
    cryp;
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });
});
