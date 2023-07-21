import rdfDereferencer from "rdf-dereference";

async function start() {
  console.log("begin");
  const webid = "https://pod.lightover.com/jackson2/profile/card#me";
  try {
    console.log((await rdfDereferencer.dereference(webid)).quads);
  } catch (e: unknown) {
    console.log("error");
    console.log(e);
  }
  console.log("end");
}
start();
