import { environment } from './../environments/environment'

export class Config {
    private static BACK_ENDPOINT: string = "http://localhost:3004";
    private static BACK_ENDPOINT_GITHUB: string = "https://bluehack.herokuapp.com";

    static get backEndPoint(): string {
        return environment.url;
    }
}