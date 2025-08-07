import router from "./rout.js";

export function configRout(app){
    app.use("/", router)
}