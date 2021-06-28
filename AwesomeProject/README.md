# React-Native-Boilerplate

State manadgment:

- Redux (toolkit)
- Redux-saga
- Redux-persist

Styles:

- Tachyouns like styles (@borjomeeee/rn-styles)

> <b>Note!</b> Also can use default react-native StyleSheet

Specific libs:

- react-navigation - navigation inside app
- react-native-reanimated - smooth animations
- react-native-svg
- react-native-splash-screen
- react-native-network-logger - logging http requests

## How to set environment?

Environment set by react-native-config lib. By default you can use 2 schemas - develop and production. Variables are setting in `.env` for develop, and `.env.prod` for production mode. To set another custom variables file check out <a href="https://github.com/luggit/react-native-config">https://github.com/luggit/react-native-config</a>

## Folder structure

```
    src/
        - Assets/
            - Svg
            - Images
            - Fonts
        - Components/ - common components for all app
            - Component1/
                - Views? - inherit components only to current component
                - Hooks? - hooks related only to current component
                - Store? - store related only to current component
                index.ts
            - Component2
            index.ts
        - Navigation/
            - Navigation1/
                - Screen1/
                    # Check Component1
                    - Views? - components only for current screen
                    - Hooks? - hooks related only for current screen
                    - Store? - store related only for current screen
                    index.ts
                - Screen2
                index.ts
                navigationOptions.ts
            - Navigation2/
                - Navigation3/
                    - Screen3
                index.ts
                navigationOptions.ts
            index.ts
            paths.ts - paths screens for navigators
        - Redux/
            - Middlewares/
                - Flow1
                - Flow2
                index.ts
            - Sagas/
                - Flow1
                - Flow2
                index.ts
            - Stores/
                - Store1/
                    reducer.ts
                    actions.ts
                    selectors.ts
                - Store2
            index.ts - createStore file
            persistConfig.ts
        - Services/
            - Service1/
                - Flow1
                - Flow2
                index.ts - init service
            - Service2
            index.ts
        - Lib/
            - Models - typesript data interfaces
            - Hooks - common hooks
            - Utils
            - Api/
                index.ts - Base ApiService class
            Const.ts
            Styles.ts - colors, configure styles
        .env - secure env params
        .env.prod - secure env params for production
        config.ts - config properties
        index.ts - enter file
```

## Why using own ApiService over fetch?

- No able add base url
- Can't set default headers
- <b>Need handle error more nicely</b>
- Logic preparing/sending and processing api requests in one place

### Example of usage

```ts
const handleBadNetworkConnection = (e: NetworkError) => {
  if (e instanceof NetworkError) {
    console.log('get network error!');
  }
};

const parseJsonIf200 = async (res: Response) => {
  if (res.status === 200) {
    return await res.json();
  } else throw new WrongDataError();
};

const withProcessDefaultRequest = promise => {
  return promise
    .then(parseJsonIf200)
    .catch(sideEffect(handleBadNetworkConnection))
    .catch(sideEffect(handleWorngDataError));
};

withProcessDefaultRequest(
  api.get(endPoint, {
    timeout: 1000,
    params: {hello: 'world'},
  }),
).then(processDogs);
```

## Splash screen

<b>Android: </b> Change `android/app/src/main/res/drawable/launch-screen.png`
<b>IOS: </b> See docs: <a href="https://github.com/crazycodeboy/react-native-splash-screen#installation">https://github.com/crazycodeboy/react-native-splash-screen#installation</a>
