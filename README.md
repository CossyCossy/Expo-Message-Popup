# Popup Message 

## This version if for react native applications

A simple and fully customizable React Native component that implements toast message popup. 
* Pop up can be displayed on any position on the screen. 
* Fully customizable UI.

## Installation

If using yarn:

```
yarn add messagepopup
```

If using npm:

```
npm i messagepopup
```
## Usage

```
import { MessagePopup } from 'messagepopup';
```
Simply place a `<MessagePopup />` tag for each desired step within the `<MessagePopup />` wrapper.

```

<MessagePopup
    title={'Title'}
    description={'description'}
    messageType={'success' or 'error'}
    icon={<SvgImage
        containerStyle={{
            width: `${25}px`,
            height: `${25}px`,
            icon_name: data.actionType === 'success' ? svgsIcons.success_icon : svgsIcons.clarity_error_icon
        }}
    />}
/>

```
## Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.
## Author
Cosmas Mbuvi | [https://crunchgarage.com](https://crunchgarage.com)
## License
[MIT](./LICENSE)