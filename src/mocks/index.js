import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import boxtext from "./all_section"

if (process.env.REACT_APP_USE_MOCKS) {

    axios.defaults.baseURL = process.env.REACT_APP_API_BASE_PATH;
    const mock = new MockAdapter(axios, {delayResponse: 2000});

    mock.onGet(`/`).reply(200, boxtext);
    mock.onAny().passThrough();

}

