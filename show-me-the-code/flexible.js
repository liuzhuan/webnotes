;(function(win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var flexibleEl = doc.querySelector('meta[name="flexible"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});
    
    if (metaEl) {
        console.warn('将根据已有的meta标签来设置缩放比例');

        /* 
        # String.prototype.match()
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

        Return value
        array
        An Array containing the entire match result and any parentheses-captured matched results, or null if there were no matches.
        */
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content');
        if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));    
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));    
            }
        }
    }

    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    docEl.setAttribute('data-dpr', dpr);
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem(){
        /*
        # Element.getBoundingClientRect()
        https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

        The Element.getBoundingClientRect() method returns the size of an 
        element and its position relative to the viewport.

        ## Return value
        The returned value is a `DOMRect` object which is the union of the 
        rectangles returned by `getClientRects()` for the element, i.e., 
        the CSS border-boxes associated with the element.

        The returned value is a DOMRect object, which contains read-only 
        `left`, `top`, `right` and `bottom` properties describing the 
        border-box in pixels. top and left are relative to the top-left 
        of the viewport.
        */
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

    /*
    # EventTarget.addEventListener()
    https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

    target.addEventListener(type, listener[, useCapture]);

    ## useCapture Optional
    
    If true, `useCapture` indicates that the user wishes to initiate capture. 
    After initiating capture, all events of the specified type will be 
    dispatched to the registered listener before being dispatched to any 
    EventTarget beneath it in the DOM tree. Events that are bubbling upward 
    through the tree will not trigger a listener designated to use capture. 
    Event bubbling and capturing are two ways of propagating events that occur 
    in an element that is nested within another element, when both elements 
    have registered a handle for that event. The event propagation mode 
    determines the order in which elements receive the event. If not specified,
     useCapture defaults to false.
    */
    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);

    /*
    # pageshow - Event Reference
    https://developer.mozilla.org/en-US/docs/Web/Events/pageshow

    The pageshow event is fired when a session history entry is being traversed to. (This includes back/forward as well as initial page-showing after the onload event.)

    https://developer.mozilla.org/en-US/Firefox/Releases/1.5/Using_Firefox_1.5_caching#pageshow_event
    This event works the same as the load event, except that it fires every 
    time the page is loaded (whereas the load event doesn’t fire in Firefox 
    1.5 when the page is loaded from cache). The first time the page loads, 
    the pageshow event fires just after the firing of the load event. The 
    pageshow event uses a boolean property called `persisted` that is set to 
    `false` on the initial load. It is set to true if it is not the initial 
    load (in other words, it is set to true when the page is cached).

    Set any JavaScript that you want to run every time a page loads to run when
     the pageshow event fires.

    If you call JavaScript functions as part of the pageshow event, you can 
    ensure these functions are called when the page is loaded in browsers other
     than Firefox 1.5 by calling the pageshow event as part of the load event, 
     as shown in the sample later in this article.
    */
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    /*
    # document.readyState
    https://developer.mozilla.org/en-US/Firefox/Releases/1.5/Using_Firefox_1.5_caching#pageshow_event

    当document文档正在加载时,返回"loading",
    当文档结束渲染但在加载内嵌资源时,返回"interactive",
    当文档加载完成时,返回"complete".

    readystatechange事件会在document对象上的readyState属性的属性值发生变化时触发.
    */
    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function(e) {
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
    }

    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function(d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    }
    
    flexible.px2rem = function(d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    }

})(window, window['lib'] || (window['lib'] = {}));