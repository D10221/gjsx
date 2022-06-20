/**
 * src = https://raw.githubusercontent.com/m18ru/small-redux/master/src/createStore.ts
 */
/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 * 
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 * 
 * @template TState State object type.
 * @template TAction Action object type.
 * 
 * @param reducer A function that returns the next state tree, given
 *  the current state tree and the action to handle.
 * 
 * @param preloadedState The initial state. You may optionally specify it
 *  to hydrate the state from the server in universal apps, or to restore a
 *  previously serialized user session.  
 *  If you use `combineReducers` to produce the root reducer function, this
 *  must be an object with the same shape as `combineReducers` keys.
 * 
 * @returns A Redux store that lets you read the state, dispatch actions
 *  and subscribe to changes.
 */
 function createStore<TState, TAction extends Action>(
	reducer: Reducer<TState, TAction>,
	preloadedState?: TState,
): Store<TState, TAction>
{
	let state: TState | undefined = preloadedState;
	const listeners: Listener[] = [];
	
	/**
	 * Reads the state tree managed by the store.
	 * 
	 * @returns The current state tree of your application.
	 */
	const getState = () => state as TState;
	
	/**
	 * Adds a change listener. It will be called any time an action is
	 * dispatched, and some part of the state tree may potentially have changed.
	 * You may then call `getState()` to read the current state tree inside the
	 * callback.
	 * 
	 * You may call `dispatch()` from a change listener, with the following
	 * caveats:
	 * 
	 * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	 * If you subscribe or unsubscribe while the listeners are being invoked,
	 * this will not have any effect on the `dispatch()` that is currently in
	 * progress. However, the next `dispatch()` call, whether nested or not,
	 * will use a more recent snapshot of the subscription list.
	 * 
	 * 2. The listener should not expect to see all states changes, as the state
	 * might have been updated multiple times during a nested `dispatch()` before
	 * the listener is called. It is, however, guaranteed that all subscribers
	 * registered before the `dispatch()` started will be called with the latest
	 * state by the time it exits.
	 * 
	 * @param listener A callback to be invoked on every dispatch.
	 * @returns A function to remove this change listener.
	 */
	const subscribe = ( listener: Listener ): Unsubscribe =>
	{
		let subscribed: boolean = true;
		
		listeners.push( listener );
		
		return (): void =>
		{
			if ( !subscribed )
			{
				return;
			}
			
			subscribed = false;
			
			const index = listeners.indexOf( listener );
			listeners.splice( index, 1 );
		};
	};
	
	/**
	 * Dispatches an action. It is the only way to trigger a state change.
	 * 
	 * The `reducer` function, used to create the store, will be called with the
	 * current state tree and the given `action`. Its return value will be
	 * considered the **next** state of the tree, and the change listeners will
	 * be notified.
	 * 
	 * @template TThisAction Action object type.
	 * 
	 * @param action A plain object representing “what changed”. It is a good
	 *  idea to keep actions serializable. An action must have a `type`
	 *  property which may not be `undefined`. It is a good idea to use string
	 *  constants for action types.
	 */
	const dispatch = <TThisAction extends TAction>( action: TThisAction ): void =>
	{
		state = reducer( state, action );
		
		for ( const listener of listeners )
		{
			listener();
		}
	};
	
	// Initial dispatch
	dispatch( {} as TAction );
	
	return {
		dispatch,
		subscribe,
		getState,
	};
}

/*
 * Actions
 */

/**
 * An *action* is a plain object that represents an intention to change the
 * state. Actions are the only way to get data into the store. Any data,
 * whether from UI events, network callbacks, or other sources such as
 * WebSockets needs to eventually be dispatched as actions.
 * 
 * Actions must have a `type` field that indicates the type of action being
 * performed. Types can be defined as constants and imported from another
 * module. It's better to use strings for `type` than Symbols because strings
 * are serializable.
 * 
 * Other than `type`, the structure of an action object is really up to you.
 * If you're interested, check out Flux Standard Action for recommendations on
 * how actions should be constructed.
 */
export interface Action
{
	type: any;
}

/*
 * Reducers
 */

/**
 * A *reducer* (also called a *reducing function*) is a function that accepts
 * an accumulation and a value and returns a new accumulation. They are used
 * to reduce a collection of values down to a single value
 * 
 * Reducers are not unique to Redux—they are a fundamental concept in
 * functional programming.  Even most non-functional languages, like
 * JavaScript, have a built-in API for reducing. In JavaScript, it's
 * `Array.prototype.reduce()`.
 * 
 * In Redux, the accumulated value is the state object, and the values being
 * accumulated are actions. Reducers calculate a new state given the previous
 * state and an action. They must be *pure functions*—functions that return
 * the exact same output for given inputs. They should also be free of
 * side-effects. This is what enables exciting features like hot reloading and
 * time travel.
 * 
 * Reducers are the most important concept in Redux.
 * 
 * *Do not put API calls into reducers.*
 * 
 * @template TState State object type.
 * @template TAction Action object type.
 */
export type Reducer<TState, TAction extends Action> =
	( state: TState | undefined, action: TAction ) => TState;

/*
 * Store
 */

/**
 * A *dispatching function* (or simply *dispatch function*) is a function that
 * accepts an action.
 * 
 * The dispatch function *always* synchronously sends an action to the
 * store's reducer, along with the previous state returned by the store, to
 * calculate a new state. It expects actions to be plain objects ready to be
 * consumed by the reducer.
 */
export type Dispatch<TAction extends Action> = ( action: TAction ) => void;

/**
 * Listener function used by `Store.subscribe()`.
 */
export type Listener = () => void;

/**
 * Function to remove listener added by `Store.subscribe()`.
 */
export type Unsubscribe = () => void;

/**
 * A store is an object that holds the application's state tree.
 * There should only be a single store in a Redux app, as the composition
 * happens on the reducer level.
 * 
 * @template TState State object type.
 * @template TAction Action object type.
 */
export interface Store<TState, TAction extends Action>
{
	/**
	 * Dispatches an action. It is the only way to trigger a state change.
	 *
	 * The `reducer` function, used to create the store, will be called with the
	 * current state tree and the given `action`. Its return value will be
	 * considered the **next** state of the tree, and the change listeners will
	 * be notified.
	 * 
	 * @param action A plain object representing “what changed”. It is a good
	 *  idea to keep actions serializable. An action must have a `type`
	 *  property which may not be `undefined`. It is a good idea to use string
	 *  constants for action types.
	 */
	dispatch: Dispatch<TAction>;
	
	/**
	 * Reads the state tree managed by the store.
	 * 
	 * @returns The current state tree of your application.
	 */
	getState(): TState;
	
	/**
	 * Adds a change listener. It will be called any time an action is
	 * dispatched, and some part of the state tree may potentially have changed.
	 * You may then call `getState()` to read the current state tree inside the
	 * callback.
	 * 
	 * You may call `dispatch()` from a change listener, with the following
	 * caveats:
	 * 
	 * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	 * If you subscribe or unsubscribe while the listeners are being invoked,
	 * this will not have any effect on the `dispatch()` that is currently in
	 * progress. However, the next `dispatch()` call, whether nested or not,
	 * will use a more recent snapshot of the subscription list.
	 * 
	 * 2. The listener should not expect to see all states changes, as the state
	 * might have been updated multiple times during a nested `dispatch()` before
	 * the listener is called. It is, however, guaranteed that all subscribers
	 * registered before the `dispatch()` started will be called with the latest
	 * state by the time it exits.
	 * 
	 * @param listener A callback to be invoked on every dispatch.
	 * @returns A function to remove this change listener.
	 */
	subscribe( listener: Listener ): Unsubscribe;
}

/**
 * Module.
 */
export {
	createStore as default,
	// Action,
	// Reducer,
	// Dispatch,
	// Listener,
	// Unsubscribe,
	// Store,
};
