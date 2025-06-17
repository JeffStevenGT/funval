function calentarAgua(callback) {
  console.log("Calentando el agua...");
  setTimeout(() => {
    console.log("Agua caliente lista");
    callback();
  }, 3000); 
}
