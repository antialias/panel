// Type definitions for panel 0.10.0
// Project: panel
// Definitions by: Mixpanel (https://mixpanel.com)
import {VNode} from 'snabbdom';
import {WebComponent} from 'webcomponent';

export class Component extends WebComponent {
    /**
     *  Defines the state of the component, including all the properties required for rendering.
     */
    state: any;
    /**
     *  Defines standard component configuration.
     */
    config: Component.ComponentConfigOptions;
    /**
     *  Template helper functions defined in config object, and exposed to template code as $helpers.
     *  This getter uses the component's internal config cache.
     */
    helpers: any;
    /**
     * For use inside view templates, to create a child Panel component nested under this
     * component, which will share its state object and update cycle.
     */
    child(tagName: string, config?: any): VNode;
    /**
     * Searches the component's Panel ancestors for the first component of the
     * given type (HTML tag name).
     */
    findPanelParentByTagName(tagName: string): Component;
    /**
     * Fetches a value from the component's configuration map (a combination of
     * values supplied in the config() getter and defaults applied automatically).
     */
    getConfig(key: string): any;
    /**
     * Executes the route handler matching the given URL fragment, and updates
     * the URL, as though the user had navigated explicitly to that address.
     */
    navigate(fragment: string, stateUpdate?: any): void;
    /**
     * Sets a value in the component's configuration map after element
     * initialization.
     */
    setConfig(key: string, val: any): void;
    /**
     *  To be overridden by subclasses, defining conditional logic for whether
      * a component should rerender its template given the state to be applied.
      * In most cases this method can be left untouched, but can provide improved
      * performance when dealing with very many DOM elements.
      */
    shouldUpdate(state: any): boolean;
    /**
     * Applies a state update, triggering a re-render check of the component as
     * well as any other components sharing the same state. This is the primary
     * means of updating the DOM in a Panel application.
     */
    update(stateUpdate?: any): void;
}

declare namespace Component {
    export interface ComponentConfigOptions {
        /* Function transforming state object to virtual dom tree */
        template(state: any): VNode;
        /* Component-specific Shadow DOM stylesheet */
        css?: string;
        /* An initial default value for the component's state property */
        defaultState?: any;
        /* Properties and functions injected automatically into template state object */
        helpers?: any;
        /* Object mapping string route expressions to handler functions */
        routes?: any;
        /* Whether to apply updates to DOM immediately, instead of batching to one update per frame */
        updateSync?: boolean;
        /* Whether to use Shadow DOM */
        useShadowDom?: boolean;
    }
}
