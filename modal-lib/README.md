# simple-component-library-modal

A simple library that allows you to set up a modal under react.
You can put a title name, a message and also put the message of your button.

## Installation and usage

```npm install simple-component-library-modal```
or 
```npm install simple-component-library-modal --force```

Then use it in your app:

**With React Component**

```js 
import { useState } from 'react';
import { Modal } from 'simple-component-library-modal'

    // If you want the modal to open, the value of the state setModal must be = a true
    const [modal, setModal] = useState(false);

    return (    
            <>
                {modal === true ? (
                    <Modal openModal={modal} title="You'r title" message="You'r message" btnMessage="you'r button message" closeModal={() => setModal(false)} />
                ): <></>} 
            </>
        )

```

## Props

Common props you may want to specify include:

* ```openModal``` - needs a true value to be open
* ```title``` - Must have a string value 
* ```message``` - Must have a string value 
* ```btnMessage``` - Must have a string value 
* ```closeModal``` - needs a false value to be closed