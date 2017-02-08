# Window.postMessage()

The `Window.postMessage()` method safely enables cross-origin communication.

The `window.postMessage()` method, when called, causes a `MessageEvent` to be dispatched at the target window when any pending script that must be executed completes. The `MessageEvent` has the type `message`, a `data` property which is set to the value of the first argument provided to `window.postMessage()`, an `origin` property corresponding to the origin of the main document in the window calling `window.postMessage` at the time `window.postMessage()` was called, and a `source` property which is the window from which `window.postMessage()` is called. 

## Syntax

```js
otherWindow.postMessage(message, targetOrigin, [transfer]);
```

* targetOrigin
  Always provide a specific targetOrigin, not *.

## The dispatched event

otherWindow can listen for dispatched messages by executing the following JavaScript:

```js
window.addEventListener('message', receiveMessage, false);

function receiveMessage(event) {
	var origin = event.origin || event.originalEvent.origin;
	if (origin !== 'http://example.org:8080')
		return;

	// ...
}
```

## Reference
- [Window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)