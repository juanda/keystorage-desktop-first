describe("Crypter", () => {
  const { Crypter } = require("../src/modules/Crypter");
  let crypter
  
  beforeEach(() => {
    crypter = new Crypter();
    crypter.setKey("laclave")
  });

  it("Debería encriptar", () => {
    let encrypted = crypter.encrypt("hola caracola");
    expect(encrypted).not.toBeNull();
    expect(encrypted).toBe('9bb0140dd71cf98f8d5590c6bb6736d5')
  })

  it("Debería desencriptar", () => {
    let decrypter = crypter.decrypt("9bb0140dd71cf98f8d5590c6bb6736d5")
    expect(decrypter).not.toBeNull()
    expect(decrypter).toBe("hola caracola")
  })
});
