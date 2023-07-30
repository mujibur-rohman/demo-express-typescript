import { PORT, app } from "./app/web";

app.listen(PORT, () => console.log("Server is listening on PORT " + PORT));
