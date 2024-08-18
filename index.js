import { server } from "./src/server.js";


const PORT = process.env.PORT || 3000;

const startServer = () => {
    try{
        server.listen(PORT, () =>{
            console.log(`Server runing on PORT ${PORT}`);
            console.log(`http//:localhost:${PORT}`);
        });
    } catch (error) {
        console.error(`Error starting the server: ${error}`);
    };
}
startServer ();