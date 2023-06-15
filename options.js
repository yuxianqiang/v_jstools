window.onload = function() {
    var nav = document.getElementById('nav');
    var oNav = nav.getElementsByTagName('button');
    var container = document.getElementById('container');
    var oDiv = container.getElementsByClassName('tab');
    for (var i = 0; i < oNav.length; i++) {
        oNav[i].index = i;
        oNav[i].onclick = function() {
            for (var i = 0; i < oNav.length; i++) {
                oNav[i].className = '';
                oDiv[i].style.display = "none";
            }
            this.className = 'act';
            oDiv[this.index].style.display = "block"
        }
        for (var m = 1; m < oNav.length; m++) {
            oNav[m].className = '';
            oDiv[m].style.display = "none";
        }
    }
}
















var getsets_0 = [
    ['Screen', 'availWidth'],
    ['Screen', 'availHeight'],
    ['Screen', 'width'],
    ['Screen', 'height'],
    ['Screen', 'colorDepth'],
    ['Screen', 'pixelDepth'],
    ['Screen', 'availLeft'],
    ['Screen', 'availTop'],
    ['Screen', 'orientation'],
    ['Navigator', 'vendorSub'],
    ['Navigator', 'productSub'],
    ['Navigator', 'vendor'],
    ['Navigator', 'maxTouchPoints'],
    ['Navigator', 'userActivation'],
    ['Navigator', 'doNotTrack'],
    ['Navigator', 'geolocation'],
    ['Navigator', 'connection'],
    ['Navigator', 'plugins'],
    ['Navigator', 'mimeTypes'],
    ['Navigator', 'webkitTemporaryStorage'],
    ['Navigator', 'webkitPersistentStorage'],
    ['Navigator', 'hardwareConcurrency'],
    ['Navigator', 'cookieEnabled'],
    ['Navigator', 'appCodeName'],
    ['Navigator', 'appName'],
    ['Navigator', 'appVersion'],
    ['Navigator', 'platform'],
    ['Navigator', 'product'],
    ['Navigator', 'userAgent'],
    ['Navigator', 'language'],
    ['Navigator', 'languages'],
    ['Navigator', 'onLine'],
    ['Navigator', 'webdriver'],
    ['Navigator', 'pdfViewerEnabled'],
    ['Navigator', 'scheduling'],
    ['Navigator', 'ink'],
    ['Navigator', 'mediaCapabilities'],
    ['Navigator', 'mediaSession'],
    ['Navigator', 'permissions'],

    ['MouseEvent', 'screenX'],
    ['MouseEvent', 'screenY'],
    ['MouseEvent', 'clientX'],
    ['MouseEvent', 'clientY'],
    ['MouseEvent', 'ctrlKey'],
    ['MouseEvent', 'shiftKey'],
    ['MouseEvent', 'altKey'],
    ['MouseEvent', 'metaKey'],
    ['MouseEvent', 'button'],
    ['MouseEvent', 'buttons'],
    ['MouseEvent', 'relatedTarget'],
    ['MouseEvent', 'pageX'],
    ['MouseEvent', 'pageY'],
    ['MouseEvent', 'x'],
    ['MouseEvent', 'y'],
    ['MouseEvent', 'offsetX'],
    ['MouseEvent', 'offsetY'],
    ['MouseEvent', 'movementX'],
    ['MouseEvent', 'movementY'],
    ['MouseEvent', 'fromElement'],
    ['MouseEvent', 'toElement'],
    ['MouseEvent', 'layerX'],
    ['MouseEvent', 'layerY'],

    ['HTMLAnchorElement', 'target'],
    ['HTMLAnchorElement', 'download'],
    ['HTMLAnchorElement', 'ping'],
    ['HTMLAnchorElement', 'rel'],
    ['HTMLAnchorElement', 'relList'],
    ['HTMLAnchorElement', 'hreflang'],
    ['HTMLAnchorElement', 'type'],
    ['HTMLAnchorElement', 'referrerPolicy'],
    ['HTMLAnchorElement', 'text'],
    ['HTMLAnchorElement', 'coords'],
    ['HTMLAnchorElement', 'charset'],
    ['HTMLAnchorElement', 'name'],
    ['HTMLAnchorElement', 'rev'],
    ['HTMLAnchorElement', 'shape'],
    ['HTMLAnchorElement', 'origin'],
    ['HTMLAnchorElement', 'protocol'],
    ['HTMLAnchorElement', 'username'],
    ['HTMLAnchorElement', 'password'],
    ['HTMLAnchorElement', 'host'],
    ['HTMLAnchorElement', 'hostname'],
    ['HTMLAnchorElement', 'port'],
    ['HTMLAnchorElement', 'pathname'],
    ['HTMLAnchorElement', 'search'],
    ['HTMLAnchorElement', 'hash'],
    ['HTMLAnchorElement', 'href'],
    ['HTMLAnchorElement', 'hrefTranslate'],

    ['Image', 'alt'],
    ['Image', 'src'],
    ['Image', 'srcset'],
    ['Image', 'sizes'],
    ['Image', 'crossOrigin'],
    ['Image', 'useMap'],
    ['Image', 'isMap'],
    ['Image', 'width'],
    ['Image', 'height'],
    ['Image', 'naturalWidth'],
    ['Image', 'naturalHeight'],
    ['Image', 'complete'],
    ['Image', 'currentSrc'],
    ['Image', 'referrerPolicy'],
    ['Image', 'decoding'],
    ['Image', 'name'],
    ['Image', 'lowsrc'],
    ['Image', 'align'],
    ['Image', 'hspace'],
    ['Image', 'vspace'],
    ['Image', 'longDesc'],
    ['Image', 'border'],
    ['Image', 'x'],
    ['Image', 'y'],
    ['Image', 'loading'],

    ['HTMLFormElement', 'acceptCharset'],
    ['HTMLFormElement', 'action'],
    ['HTMLFormElement', 'autocomplete'],
    ['HTMLFormElement', 'enctype'],
    ['HTMLFormElement', 'encoding'],
    ['HTMLFormElement', 'method'],
    ['HTMLFormElement', 'name'],
    ['HTMLFormElement', 'noValidate'],
    ['HTMLFormElement', 'target'],
    ['HTMLFormElement', 'elements'],
    ['HTMLFormElement', 'length'],

    ['WebSocket', 'url'],
    ['WebSocket', 'readyState'],
    ['WebSocket', 'bufferedAmount'],
    ['WebSocket', 'onopen'],
    ['WebSocket', 'onerror'],
    ['WebSocket', 'onclose'],
    ['WebSocket', 'extensions'],
    ['WebSocket', 'protocol'],
    ['WebSocket', 'onmessage'],
    ['WebSocket', 'binaryType'],

    ['XMLHttpRequest', 'onreadystatechange'],
    ['XMLHttpRequest', 'readyState'],
    ['XMLHttpRequest', 'timeout'],
    ['XMLHttpRequest', 'withCredentials'],
    ['XMLHttpRequest', 'upload'],
    ['XMLHttpRequest', 'responseURL'],
    ['XMLHttpRequest', 'status'],
    ['XMLHttpRequest', 'statusText'],
    ['XMLHttpRequest', 'responseType'],
    ['XMLHttpRequest', 'response'],
    ['XMLHttpRequest', 'responseText'],
    ['XMLHttpRequest', 'responseXML'],

    ['XMLHttpRequestEventTarget', 'onloadstart'],
    ['XMLHttpRequestEventTarget', 'onprogress'],
    ['XMLHttpRequestEventTarget', 'onabort'],
    ['XMLHttpRequestEventTarget', 'onerror'],
    ['XMLHttpRequestEventTarget', 'onload'],
    ['XMLHttpRequestEventTarget', 'ontimeout'],
    ['XMLHttpRequestEventTarget', 'onloadend'],
]

var funcs_0 = [
    // 这部分就是请求常用的接口
    
    ['XMLHttpRequest', 'abort'],
    ['XMLHttpRequest', 'getAllResponseHeaders'],
    ['XMLHttpRequest', 'getResponseHeader'],
    ['XMLHttpRequest', 'open'],
    ['XMLHttpRequest', 'overrideMimeType'],
    ['XMLHttpRequest', 'send'],
    ['XMLHttpRequest', 'setRequestHeader'],

    ['HTMLFormElement', 'checkValidity'],
    ['HTMLFormElement', 'reportValidity'],
    ['HTMLFormElement', 'requestSubmit'],
    ['HTMLFormElement', 'reset'],
    ['HTMLFormElement', 'submit'],

    // 这部分得和 cookie 一样做成额外代码，让其携带一些特殊功能
    ['Document', 'getElementById'],
    ['Document', 'getElementsByClassName'],
    ['Document', 'getElementsByName'],
    ['Document', 'getElementsByTagName'],
    ['Document', 'getElementsByTagNameNS'],
    ['Document', 'querySelector'],
    ['Document', 'querySelectorAll'],

    ['Document', 'createAttribute'],
    ['Document', 'createAttributeNS'],
    ['Document', 'createCDATASection'],
    ['Document', 'createComment'],
    ['Document', 'createDocumentFragment'],
    ['Document', 'createElement'],
    ['Document', 'createElementNS'],
    ['Document', 'createEvent'],
    ['Document', 'createExpression'],
    ['Document', 'createNSResolver'],
    ['Document', 'createNodeIterator'],
    ['Document', 'createProcessingInstruction'],
    ['Document', 'createRange'],
    ['Document', 'createTextNode'],
    ['Document', 'createTreeWalker'],

    ['Element', 'getAttribute'],
    ['Element', 'getAttributeNS'],
    ['Element', 'getAttributeNames'],
    ['Element', 'getAttributeNode'],
    ['Element', 'getAttributeNodeNS'],
    ['Element', 'getBoundingClientRect'],
    ['Element', 'getClientRects'],
    ['Element', 'getElementsByClassName'],
    ['Element', 'getElementsByTagName'],
    ['Element', 'getElementsByTagNameNS'],
    ['Element', 'querySelector'],
    ['Element', 'querySelectorAll'],
    ['Element', 'setAttribute'],
    ['Element', 'setAttributeNS'],
    ['Element', 'setAttributeNode'],
    ['Element', 'setAttributeNodeNS'],

    ['HTMLAnchorElement', 'toString'],

    ['WebSocket', 'close'],
    ['WebSocket', 'send'],
]


var getsets_1 = [
    ['Document', 'implementation'],
    ['Document', 'URL'],
    ['Document', 'documentURI'],
    ['Document', 'compatMode'],
    ['Document', 'characterSet'],
    ['Document', 'charset'],
    ['Document', 'inputEncoding'],
    ['Document', 'contentType'],
    ['Document', 'doctype'],
    ['Document', 'documentElement'],
    ['Document', 'xmlEncoding'],
    ['Document', 'xmlVersion'],
    ['Document', 'xmlStandalone'],
    ['Document', 'domain'],
    ['Document', 'referrer'],
    // ['Document', 'cookie'],
    ['Document', 'lastModified'],
    ['Document', 'readyState'],
    ['Document', 'title'],
    ['Document', 'dir'],
    ['Document', 'body'],
    ['Document', 'head'],
    // 比较关键的几个对象
    ['Document', 'images'],
    ['Document', 'embeds'],
    ['Document', 'plugins'],
    ['Document', 'links'],
    ['Document', 'forms'],
    ['Document', 'scripts'],

    ['Document', 'currentScript'],
    ['Document', 'defaultView'],
    ['Document', 'designMode'],
    ['Document', 'onreadystatechange'],
    ['Document', 'anchors'],
    ['Document', 'applets'],
    ['Document', 'fgColor'],
    ['Document', 'linkColor'],
    ['Document', 'vlinkColor'],
    ['Document', 'alinkColor'],
    ['Document', 'bgColor'],
    ['Document', 'all'],
    ['Document', 'scrollingElement'],['Document', 'onpointerlockchange'],['Document', 'onpointerlockerror'],['Document', 'hidden'],['Document', 'visibilityState'],['Document', 'wasDiscarded'],['Document', 'featurePolicy'],['Document', 'webkitVisibilityState'],['Document', 'webkitHidden'],['Document', 'onbeforecopy'],['Document', 'onbeforecut'],['Document', 'onbeforepaste'],['Document', 'onfreeze'],['Document', 'onresume'],['Document', 'onsearch'],['Document', 'onsecuritypolicyviolation'],['Document', 'onvisibilitychange'],['Document', 'fullscreenEnabled'],['Document', 'fullscreen'],['Document', 'onfullscreenchange'],['Document', 'onfullscreenerror'],['Document', 'webkitIsFullScreen'],['Document', 'webkitCurrentFullScreenElement'],['Document', 'webkitFullscreenEnabled'],['Document', 'webkitFullscreenElement'],['Document', 'onwebkitfullscreenchange'],['Document', 'onwebkitfullscreenerror'],['Document', 'rootElement'],['Document', 'onbeforexrselect'],['Document', 'onabort'],['Document', 'onblur'],['Document', 'oncancel'],['Document', 'oncanplay'],['Document', 'oncanplaythrough'],['Document', 'onchange'],['Document', 'onclick'],['Document', 'onclose'],['Document', 'oncontextmenu'],['Document', 'oncuechange'],['Document', 'ondblclick'],['Document', 'ondrag'],['Document', 'ondragend'],['Document', 'ondragenter'],['Document', 'ondragleave'],['Document', 'ondragover'],['Document', 'ondragstart'],['Document', 'ondrop'],['Document', 'ondurationchange'],['Document', 'onemptied'],['Document', 'onended'],['Document', 'onerror'],['Document', 'onfocus'],['Document', 'onformdata'],['Document', 'oninput'],['Document', 'oninvalid'],['Document', 'onkeydown'],['Document', 'onkeypress'],['Document', 'onkeyup'],['Document', 'onload'],['Document', 'onloadeddata'],['Document', 'onloadedmetadata'],['Document', 'onloadstart'],['Document', 'onmousedown'],['Document', 'onmouseenter'],['Document', 'onmouseleave'],['Document', 'onmousemove'],['Document', 'onmouseout'],['Document', 'onmouseover'],['Document', 'onmouseup'],['Document', 'onmousewheel'],['Document', 'onpause'],['Document', 'onplay'],['Document', 'onplaying'],['Document', 'onprogress'],['Document', 'onratechange'],['Document', 'onreset'],['Document', 'onresize'],['Document', 'onscroll'],['Document', 'onseeked'],['Document', 'onseeking'],['Document', 'onselect'],['Document', 'onstalled'],['Document', 'onsubmit'],['Document', 'onsuspend'],['Document', 'ontimeupdate'],['Document', 'ontoggle'],['Document', 'onvolumechange'],['Document', 'onwaiting'],['Document', 'onwebkitanimationend'],['Document', 'onwebkitanimationiteration'],['Document', 'onwebkitanimationstart'],['Document', 'onwebkittransitionend'],['Document', 'onwheel'],['Document', 'onauxclick'],['Document', 'ongotpointercapture'],['Document', 'onlostpointercapture'],['Document', 'onpointerdown'],['Document', 'onpointermove'],['Document', 'onpointerup'],['Document', 'onpointercancel'],['Document', 'onpointerover'],['Document', 'onpointerout'],['Document', 'onpointerenter'],['Document', 'onpointerleave'],['Document', 'onselectstart'],['Document', 'onselectionchange'],['Document', 'onanimationend'],['Document', 'onanimationiteration'],['Document', 'onanimationstart'],['Document', 'ontransitionrun'],['Document', 'ontransitionstart'],['Document', 'ontransitionend'],['Document', 'ontransitioncancel'],['Document', 'oncopy'],['Document', 'oncut'],['Document', 'onpaste'],['Document', 'children'],['Document', 'firstElementChild'],['Document', 'lastElementChild'],['Document', 'childElementCount'],['Document', 'activeElement'],['Document', 'styleSheets'],['Document', 'pointerLockElement'],['Document', 'fullscreenElement'],['Document', 'adoptedStyleSheets'],['Document', 'fonts'],['Document', 'fragmentDirective'],['Document', 'timeline'],['Document', 'pictureInPictureEnabled'],['Document', 'pictureInPictureElement'],
    ['Option', 'disabled'],['Option', 'form'],['Option', 'label'],['Option', 'defaultSelected'],['Option', 'selected'],['Option', 'value'],['Option', 'text'],['Option', 'index'],
    ['webkitURL', 'origin'],['webkitURL', 'protocol'],['webkitURL', 'username'],['webkitURL', 'password'],['webkitURL', 'host'],['webkitURL', 'hostname'],['webkitURL', 'port'],['webkitURL', 'pathname'],['webkitURL', 'search'],['webkitURL', 'searchParams'],['webkitURL', 'hash'],['webkitURL', 'href'],['webkitRTCPeerConnection', 'localDescription'],['webkitRTCPeerConnection', 'currentLocalDescription'],['webkitRTCPeerConnection', 'pendingLocalDescription'],['webkitRTCPeerConnection', 'remoteDescription'],['webkitRTCPeerConnection', 'currentRemoteDescription'],['webkitRTCPeerConnection', 'pendingRemoteDescription'],['webkitRTCPeerConnection', 'signalingState'],['webkitRTCPeerConnection', 'iceGatheringState'],['webkitRTCPeerConnection', 'iceConnectionState'],['webkitRTCPeerConnection', 'connectionState'],['webkitRTCPeerConnection', 'canTrickleIceCandidates'],['webkitRTCPeerConnection', 'onnegotiationneeded'],['webkitRTCPeerConnection', 'onicecandidate'],['webkitRTCPeerConnection', 'onsignalingstatechange'],['webkitRTCPeerConnection', 'oniceconnectionstatechange'],['webkitRTCPeerConnection', 'onconnectionstatechange'],['webkitRTCPeerConnection', 'onicegatheringstatechange'],['webkitRTCPeerConnection', 'onicecandidateerror'],['webkitRTCPeerConnection', 'ontrack'],['webkitRTCPeerConnection', 'sctp'],['webkitRTCPeerConnection', 'ondatachannel'],['webkitRTCPeerConnection', 'onaddstream'],['webkitRTCPeerConnection', 'onremovestream'],['webkitMediaStream', 'id'],['webkitMediaStream', 'active'],['webkitMediaStream', 'onaddtrack'],['webkitMediaStream', 'onremovetrack'],['webkitMediaStream', 'onactive'],['webkitMediaStream', 'oninactive'],['XPathResult', 'resultType'],['XPathResult', 'numberValue'],['XPathResult', 'stringValue'],['XPathResult', 'booleanValue'],['XPathResult', 'singleNodeValue'],['XPathResult', 'invalidIteratorState'],['XPathResult', 'snapshotLength'],
    ['WritableStreamDefaultWriter', 'closed'],['WritableStreamDefaultWriter', 'desiredSize'],['WritableStreamDefaultWriter', 'ready'],['WritableStream', 'locked'],['Worker', 'onmessage'],['Worker', 'onerror'],['WheelEvent', 'deltaX'],['WheelEvent', 'deltaY'],['WheelEvent', 'deltaZ'],['WheelEvent', 'deltaMode'],['WheelEvent', 'wheelDeltaX'],['WheelEvent', 'wheelDeltaY'],['WheelEvent', 'wheelDelta'],
    ['WebGLShaderPrecisionFormat', 'rangeMin'],['WebGLShaderPrecisionFormat', 'rangeMax'],['WebGLShaderPrecisionFormat', 'precision'],['WebGLRenderingContext', 'canvas'],['WebGLRenderingContext', 'drawingBufferWidth'],['WebGLRenderingContext', 'drawingBufferHeight'],['WebGLContextEvent', 'statusMessage'],['WebGLActiveInfo', 'size'],['WebGLActiveInfo', 'type'],['WebGLActiveInfo', 'name'],['WebGL2RenderingContext', 'canvas'],['WebGL2RenderingContext', 'drawingBufferWidth'],['WebGL2RenderingContext', 'drawingBufferHeight'],['WaveShaperNode', 'curve'],['WaveShaperNode', 'oversample'],['VisualViewport', 'offsetLeft'],['VisualViewport', 'offsetTop'],['VisualViewport', 'pageLeft'],['VisualViewport', 'pageTop'],['VisualViewport', 'width'],['VisualViewport', 'height'],['VisualViewport', 'scale'],['VisualViewport', 'onresize'],['VisualViewport', 'onscroll'],['ValidityState', 'valueMissing'],['ValidityState', 'typeMismatch'],['ValidityState', 'patternMismatch'],['ValidityState', 'tooLong'],['ValidityState', 'tooShort'],['ValidityState', 'rangeUnderflow'],['ValidityState', 'rangeOverflow'],['ValidityState', 'stepMismatch'],['ValidityState', 'badInput'],['ValidityState', 'customError'],['ValidityState', 'valid'],['VTTCue', 'vertical'],['VTTCue', 'snapToLines'],['VTTCue', 'line'],['VTTCue', 'position'],['VTTCue', 'size'],['VTTCue', 'align'],['VTTCue', 'text'],['UserActivation', 'hasBeenActive'],['UserActivation', 'isActive'],['URL', 'origin'],['URL', 'protocol'],['URL', 'username'],['URL', 'password'],['URL', 'host'],['URL', 'hostname'],['URL', 'port'],['URL', 'pathname'],['URL', 'search'],['URL', 'searchParams'],['URL', 'hash'],['URL', 'href'],['UIEvent', 'view'],['UIEvent', 'detail'],['UIEvent', 'sourceCapabilities'],['UIEvent', 'which'],['TreeWalker', 'root'],['TreeWalker', 'whatToShow'],['TreeWalker', 'filter'],['TreeWalker', 'currentNode'],['TransitionEvent', 'propertyName'],['TransitionEvent', 'elapsedTime'],['TransitionEvent', 'pseudoElement'],['TransformStream', 'readable'],['TransformStream', 'writable'],['TrackEvent', 'track'],['TouchList', 'length'],['TouchEvent', 'touches'],['TouchEvent', 'targetTouches'],['TouchEvent', 'changedTouches'],['TouchEvent', 'altKey'],['TouchEvent', 'metaKey'],['TouchEvent', 'ctrlKey'],['TouchEvent', 'shiftKey'],['Touch', 'identifier'],['Touch', 'target'],['Touch', 'screenX'],['Touch', 'screenY'],['Touch', 'clientX'],['Touch', 'clientY'],['Touch', 'pageX'],['Touch', 'pageY'],['Touch', 'radiusX'],['Touch', 'radiusY'],['Touch', 'rotationAngle'],['Touch', 'force'],['TimeRanges', 'length'],['TextTrackList', 'length'],['TextTrackList', 'onchange'],['TextTrackList', 'onaddtrack'],['TextTrackList', 'onremovetrack'],['TextTrackCueList', 'length'],['TextTrackCue', 'track'],['TextTrackCue', 'id'],['TextTrackCue', 'startTime'],['TextTrackCue', 'endTime'],['TextTrackCue', 'pauseOnExit'],['TextTrackCue', 'onenter'],['TextTrackCue', 'onexit'],['TextTrack', 'kind'],['TextTrack', 'label'],['TextTrack', 'language'],['TextTrack', 'id'],['TextTrack', 'mode'],['TextTrack', 'cues'],['TextTrack', 'activeCues'],['TextTrack', 'oncuechange'],['TextMetrics', 'width'],['TextMetrics', 'actualBoundingBoxLeft'],['TextMetrics', 'actualBoundingBoxRight'],['TextMetrics', 'fontBoundingBoxAscent'],['TextMetrics', 'fontBoundingBoxDescent'],['TextMetrics', 'actualBoundingBoxAscent'],['TextMetrics', 'actualBoundingBoxDescent'],['TextEvent', 'data'],['TextEncoderStream', 'encoding'],['TextEncoderStream', 'readable'],['TextEncoderStream', 'writable'],['TextEncoder', 'encoding'],['TextDecoderStream', 'encoding'],['TextDecoderStream', 'fatal'],['TextDecoderStream', 'ignoreBOM'],['TextDecoderStream', 'readable'],['TextDecoderStream', 'writable'],['TextDecoder', 'encoding'],['TextDecoder', 'fatal'],['TextDecoder', 'ignoreBOM'],['Text', 'wholeText'],['Text', 'assignedSlot'],['TaskAttributionTiming', 'containerType'],['TaskAttributionTiming', 'containerSrc'],['TaskAttributionTiming', 'containerId'],['TaskAttributionTiming', 'containerName'],['SubmitEvent', 'submitter'],['StyleSheetList', 'length'],['StyleSheet', 'type'],['StyleSheet', 'href'],['StyleSheet', 'ownerNode'],['StyleSheet', 'parentStyleSheet'],['StyleSheet', 'title'],['StyleSheet', 'media'],['StyleSheet', 'disabled'],['StylePropertyMapReadOnly', 'size'],['StorageEvent', 'key'],['StorageEvent', 'oldValue'],['StorageEvent', 'newValue'],['StorageEvent', 'url'],['StorageEvent', 'storageArea'],['Storage', 'length'],['StereoPannerNode', 'pan'],['ShadowRoot', 'mode'],['ShadowRoot', 'host'],['ShadowRoot', 'innerHTML'],['ShadowRoot', 'delegatesFocus'],['ShadowRoot', 'slotAssignment'],['ShadowRoot', 'activeElement'],['ShadowRoot', 'styleSheets'],['ShadowRoot', 'pointerLockElement'],['ShadowRoot', 'fullscreenElement'],['ShadowRoot', 'adoptedStyleSheets'],['ShadowRoot', 'pictureInPictureElement'],['Selection', 'anchorNode'],['Selection', 'anchorOffset'],['Selection', 'focusNode'],['Selection', 'focusOffset'],['Selection', 'isCollapsed'],['Selection', 'rangeCount'],['Selection', 'type'],['Selection', 'baseNode'],['Selection', 'baseOffset'],['Selection', 'extentNode'],['Selection', 'extentOffset'],['SecurityPolicyViolationEvent', 'documentURI'],['SecurityPolicyViolationEvent', 'referrer'],['SecurityPolicyViolationEvent', 'blockedURI'],['SecurityPolicyViolationEvent', 'violatedDirective'],['SecurityPolicyViolationEvent', 'effectiveDirective'],['SecurityPolicyViolationEvent', 'originalPolicy'],['SecurityPolicyViolationEvent', 'disposition'],['SecurityPolicyViolationEvent', 'sourceFile'],['SecurityPolicyViolationEvent', 'statusCode'],['SecurityPolicyViolationEvent', 'lineNumber'],['SecurityPolicyViolationEvent', 'columnNumber'],['SecurityPolicyViolationEvent', 'sample'],['ScriptProcessorNode', 'onaudioprocess'],['ScriptProcessorNode', 'bufferSize'],['ScreenOrientation', 'angle'],['ScreenOrientation', 'type'],['ScreenOrientation', 'onchange'],
    ['SVGViewElement', 'viewBox'],['SVGViewElement', 'preserveAspectRatio'],['SVGViewElement', 'zoomAndPan'],['SVGUseElement', 'x'],['SVGUseElement', 'y'],['SVGUseElement', 'width'],['SVGUseElement', 'height'],['SVGUseElement', 'href'],['SVGTransformList', 'length'],['SVGTransformList', 'numberOfItems'],['SVGTransform', 'type'],['SVGTransform', 'matrix'],['SVGTransform', 'angle'],['SVGTextPositioningElement', 'x'],['SVGTextPositioningElement', 'y'],['SVGTextPositioningElement', 'dx'],['SVGTextPositioningElement', 'dy'],['SVGTextPositioningElement', 'rotate'],['SVGTextPathElement', 'startOffset'],['SVGTextPathElement', 'method'],['SVGTextPathElement', 'spacing'],['SVGTextPathElement', 'href'],['SVGTextContentElement', 'textLength'],['SVGTextContentElement', 'lengthAdjust'],['SVGSymbolElement', 'viewBox'],['SVGSymbolElement', 'preserveAspectRatio'],['SVGStyleElement', 'type'],['SVGStyleElement', 'media'],['SVGStyleElement', 'title'],['SVGStyleElement', 'sheet'],['SVGStyleElement', 'disabled'],['SVGStringList', 'length'],['SVGStringList', 'numberOfItems'],['SVGStopElement', 'offset'],['SVGScriptElement', 'type'],['SVGScriptElement', 'href'],['SVGSVGElement', 'x'],['SVGSVGElement', 'y'],['SVGSVGElement', 'width'],['SVGSVGElement', 'height'],['SVGSVGElement', 'currentScale'],['SVGSVGElement', 'currentTranslate'],['SVGSVGElement', 'viewBox'],['SVGSVGElement', 'preserveAspectRatio'],['SVGSVGElement', 'zoomAndPan'],['SVGRectElement', 'x'],['SVGRectElement', 'y'],['SVGRectElement', 'width'],['SVGRectElement', 'height'],['SVGRectElement', 'rx'],['SVGRectElement', 'ry'],['SVGRect', 'x'],['SVGRect', 'y'],['SVGRect', 'width'],['SVGRect', 'height'],['SVGRadialGradientElement', 'cx'],['SVGRadialGradientElement', 'cy'],['SVGRadialGradientElement', 'r'],['SVGRadialGradientElement', 'fx'],['SVGRadialGradientElement', 'fy'],['SVGRadialGradientElement', 'fr'],['SVGPreserveAspectRatio', 'align'],['SVGPreserveAspectRatio', 'meetOrSlice'],['SVGPolylineElement', 'points'],['SVGPolylineElement', 'animatedPoints'],['SVGPolygonElement', 'points'],['SVGPolygonElement', 'animatedPoints'],['SVGPointList', 'length'],['SVGPointList', 'numberOfItems'],['SVGPoint', 'x'],['SVGPoint', 'y'],['SVGPatternElement', 'patternUnits'],['SVGPatternElement', 'patternContentUnits'],['SVGPatternElement', 'patternTransform'],['SVGPatternElement', 'x'],['SVGPatternElement', 'y'],['SVGPatternElement', 'width'],['SVGPatternElement', 'height'],['SVGPatternElement', 'viewBox'],['SVGPatternElement', 'preserveAspectRatio'],['SVGPatternElement', 'href'],['SVGPatternElement', 'requiredExtensions'],['SVGPatternElement', 'systemLanguage'],['SVGNumberList', 'length'],['SVGNumberList', 'numberOfItems'],['SVGNumber', 'value'],['SVGMatrix', 'a'],['SVGMatrix', 'b'],['SVGMatrix', 'c'],['SVGMatrix', 'd'],['SVGMatrix', 'e'],['SVGMatrix', 'f'],['SVGMaskElement', 'maskUnits'],['SVGMaskElement', 'maskContentUnits'],['SVGMaskElement', 'x'],['SVGMaskElement', 'y'],['SVGMaskElement', 'width'],['SVGMaskElement', 'height'],['SVGMaskElement', 'requiredExtensions'],['SVGMaskElement', 'systemLanguage'],['SVGMarkerElement', 'refX'],['SVGMarkerElement', 'refY'],['SVGMarkerElement', 'markerUnits'],['SVGMarkerElement', 'markerWidth'],['SVGMarkerElement', 'markerHeight'],['SVGMarkerElement', 'orientType'],['SVGMarkerElement', 'orientAngle'],['SVGMarkerElement', 'viewBox'],['SVGMarkerElement', 'preserveAspectRatio'],['SVGMPathElement', 'href'],['SVGLinearGradientElement', 'x1'],['SVGLinearGradientElement', 'y1'],['SVGLinearGradientElement', 'x2'],['SVGLinearGradientElement', 'y2'],['SVGLineElement', 'x1'],['SVGLineElement', 'y1'],['SVGLineElement', 'x2'],['SVGLineElement', 'y2'],['SVGLengthList', 'length'],['SVGLengthList', 'numberOfItems'],['SVGLength', 'unitType'],['SVGLength', 'value'],['SVGLength', 'valueInSpecifiedUnits'],['SVGLength', 'valueAsString'],['SVGImageElement', 'x'],['SVGImageElement', 'y'],['SVGImageElement', 'width'],['SVGImageElement', 'height'],['SVGImageElement', 'preserveAspectRatio'],['SVGImageElement', 'decoding'],['SVGImageElement', 'href'],['SVGGraphicsElement', 'transform'],['SVGGraphicsElement', 'nearestViewportElement'],['SVGGraphicsElement', 'farthestViewportElement'],['SVGGraphicsElement', 'requiredExtensions'],['SVGGraphicsElement', 'systemLanguage'],['SVGGradientElement', 'gradientUnits'],['SVGGradientElement', 'gradientTransform'],['SVGGradientElement', 'spreadMethod'],['SVGGradientElement', 'href'],['SVGGeometryElement', 'pathLength'],['SVGForeignObjectElement', 'x'],['SVGForeignObjectElement', 'y'],['SVGForeignObjectElement', 'width'],['SVGForeignObjectElement', 'height'],['SVGFilterElement', 'filterUnits'],['SVGFilterElement', 'primitiveUnits'],['SVGFilterElement', 'x'],['SVGFilterElement', 'y'],['SVGFilterElement', 'width'],['SVGFilterElement', 'height'],['SVGFilterElement', 'href'],['SVGFETurbulenceElement', 'baseFrequencyX'],['SVGFETurbulenceElement', 'baseFrequencyY'],['SVGFETurbulenceElement', 'numOctaves'],['SVGFETurbulenceElement', 'seed'],['SVGFETurbulenceElement', 'stitchTiles'],['SVGFETurbulenceElement', 'type'],['SVGFETurbulenceElement', 'x'],['SVGFETurbulenceElement', 'y'],['SVGFETurbulenceElement', 'width'],['SVGFETurbulenceElement', 'height'],['SVGFETurbulenceElement', 'result'],['SVGFETileElement', 'in1'],['SVGFETileElement', 'x'],['SVGFETileElement', 'y'],['SVGFETileElement', 'width'],['SVGFETileElement', 'height'],['SVGFETileElement', 'result'],['SVGFESpotLightElement', 'x'],['SVGFESpotLightElement', 'y'],['SVGFESpotLightElement', 'z'],['SVGFESpotLightElement', 'pointsAtX'],['SVGFESpotLightElement', 'pointsAtY'],['SVGFESpotLightElement', 'pointsAtZ'],['SVGFESpotLightElement', 'specularExponent'],['SVGFESpotLightElement', 'limitingConeAngle'],['SVGFESpecularLightingElement', 'in1'],['SVGFESpecularLightingElement', 'surfaceScale'],['SVGFESpecularLightingElement', 'specularConstant'],['SVGFESpecularLightingElement', 'specularExponent'],['SVGFESpecularLightingElement', 'kernelUnitLengthX'],['SVGFESpecularLightingElement', 'kernelUnitLengthY'],['SVGFESpecularLightingElement', 'x'],['SVGFESpecularLightingElement', 'y'],['SVGFESpecularLightingElement', 'width'],['SVGFESpecularLightingElement', 'height'],['SVGFESpecularLightingElement', 'result'],['SVGFEPointLightElement', 'x'],['SVGFEPointLightElement', 'y'],['SVGFEPointLightElement', 'z'],['SVGFEOffsetElement', 'in1'],['SVGFEOffsetElement', 'dx'],['SVGFEOffsetElement', 'dy'],['SVGFEOffsetElement', 'x'],['SVGFEOffsetElement', 'y'],['SVGFEOffsetElement', 'width'],['SVGFEOffsetElement', 'height'],['SVGFEOffsetElement', 'result'],['SVGFEMorphologyElement', 'in1'],['SVGFEMorphologyElement', 'operator'],['SVGFEMorphologyElement', 'radiusX'],['SVGFEMorphologyElement', 'radiusY'],['SVGFEMorphologyElement', 'x'],['SVGFEMorphologyElement', 'y'],['SVGFEMorphologyElement', 'width'],['SVGFEMorphologyElement', 'height'],['SVGFEMorphologyElement', 'result'],['SVGFEMergeNodeElement', 'in1'],['SVGFEMergeElement', 'x'],['SVGFEMergeElement', 'y'],['SVGFEMergeElement', 'width'],['SVGFEMergeElement', 'height'],['SVGFEMergeElement', 'result'],['SVGFEImageElement', 'preserveAspectRatio'],['SVGFEImageElement', 'x'],['SVGFEImageElement', 'y'],['SVGFEImageElement', 'width'],['SVGFEImageElement', 'height'],['SVGFEImageElement', 'result'],['SVGFEImageElement', 'href'],['SVGFEGaussianBlurElement', 'in1'],['SVGFEGaussianBlurElement', 'stdDeviationX'],['SVGFEGaussianBlurElement', 'stdDeviationY'],['SVGFEGaussianBlurElement', 'x'],['SVGFEGaussianBlurElement', 'y'],['SVGFEGaussianBlurElement', 'width'],['SVGFEGaussianBlurElement', 'height'],['SVGFEGaussianBlurElement', 'result'],['SVGFEFloodElement', 'x'],['SVGFEFloodElement', 'y'],['SVGFEFloodElement', 'width'],['SVGFEFloodElement', 'height'],['SVGFEFloodElement', 'result'],['SVGFEDropShadowElement', 'in1'],['SVGFEDropShadowElement', 'dx'],['SVGFEDropShadowElement', 'dy'],['SVGFEDropShadowElement', 'stdDeviationX'],['SVGFEDropShadowElement', 'stdDeviationY'],['SVGFEDropShadowElement', 'x'],['SVGFEDropShadowElement', 'y'],['SVGFEDropShadowElement', 'width'],['SVGFEDropShadowElement', 'height'],['SVGFEDropShadowElement', 'result'],['SVGFEDistantLightElement', 'azimuth'],['SVGFEDistantLightElement', 'elevation'],['SVGFEDisplacementMapElement', 'in1'],['SVGFEDisplacementMapElement', 'in2'],['SVGFEDisplacementMapElement', 'scale'],['SVGFEDisplacementMapElement', 'xChannelSelector'],['SVGFEDisplacementMapElement', 'yChannelSelector'],['SVGFEDisplacementMapElement', 'x'],['SVGFEDisplacementMapElement', 'y'],['SVGFEDisplacementMapElement', 'width'],['SVGFEDisplacementMapElement', 'height'],['SVGFEDisplacementMapElement', 'result'],['SVGFEDiffuseLightingElement', 'in1'],['SVGFEDiffuseLightingElement', 'surfaceScale'],['SVGFEDiffuseLightingElement', 'diffuseConstant'],['SVGFEDiffuseLightingElement', 'kernelUnitLengthX'],['SVGFEDiffuseLightingElement', 'kernelUnitLengthY'],['SVGFEDiffuseLightingElement', 'x'],['SVGFEDiffuseLightingElement', 'y'],['SVGFEDiffuseLightingElement', 'width'],['SVGFEDiffuseLightingElement', 'height'],['SVGFEDiffuseLightingElement', 'result'],['SVGFEConvolveMatrixElement', 'in1'],['SVGFEConvolveMatrixElement', 'orderX'],['SVGFEConvolveMatrixElement', 'orderY'],['SVGFEConvolveMatrixElement', 'kernelMatrix'],['SVGFEConvolveMatrixElement', 'divisor'],['SVGFEConvolveMatrixElement', 'bias'],['SVGFEConvolveMatrixElement', 'targetX'],['SVGFEConvolveMatrixElement', 'targetY'],['SVGFEConvolveMatrixElement', 'edgeMode'],['SVGFEConvolveMatrixElement', 'kernelUnitLengthX'],['SVGFEConvolveMatrixElement', 'kernelUnitLengthY'],['SVGFEConvolveMatrixElement', 'preserveAlpha'],['SVGFEConvolveMatrixElement', 'x'],['SVGFEConvolveMatrixElement', 'y'],['SVGFEConvolveMatrixElement', 'width'],['SVGFEConvolveMatrixElement', 'height'],['SVGFEConvolveMatrixElement', 'result'],['SVGFECompositeElement', 'in2'],['SVGFECompositeElement', 'in1'],['SVGFECompositeElement', 'operator'],['SVGFECompositeElement', 'k1'],['SVGFECompositeElement', 'k2'],['SVGFECompositeElement', 'k3'],['SVGFECompositeElement', 'k4'],['SVGFECompositeElement', 'x'],['SVGFECompositeElement', 'y'],['SVGFECompositeElement', 'width'],['SVGFECompositeElement', 'height'],['SVGFECompositeElement', 'result'],['SVGFEComponentTransferElement', 'in1'],['SVGFEComponentTransferElement', 'x'],['SVGFEComponentTransferElement', 'y'],['SVGFEComponentTransferElement', 'width'],['SVGFEComponentTransferElement', 'height'],['SVGFEComponentTransferElement', 'result'],['SVGFEColorMatrixElement', 'in1'],['SVGFEColorMatrixElement', 'type'],['SVGFEColorMatrixElement', 'values'],['SVGFEColorMatrixElement', 'x'],['SVGFEColorMatrixElement', 'y'],['SVGFEColorMatrixElement', 'width'],['SVGFEColorMatrixElement', 'height'],['SVGFEColorMatrixElement', 'result'],['SVGFEBlendElement', 'in1'],['SVGFEBlendElement', 'in2'],['SVGFEBlendElement', 'mode'],['SVGFEBlendElement', 'x'],['SVGFEBlendElement', 'y'],['SVGFEBlendElement', 'width'],['SVGFEBlendElement', 'height'],['SVGFEBlendElement', 'result'],['SVGEllipseElement', 'cx'],['SVGEllipseElement', 'cy'],['SVGEllipseElement', 'rx'],['SVGEllipseElement', 'ry'],['SVGElement', 'className'],['SVGElement', 'style'],['SVGElement', 'ownerSVGElement'],['SVGElement', 'viewportElement'],['SVGElement', 'onbeforexrselect'],['SVGElement', 'onabort'],['SVGElement', 'onblur'],['SVGElement', 'oncancel'],['SVGElement', 'oncanplay'],['SVGElement', 'oncanplaythrough'],['SVGElement', 'onchange'],['SVGElement', 'onclick'],['SVGElement', 'onclose'],['SVGElement', 'oncontextmenu'],['SVGElement', 'oncuechange'],['SVGElement', 'ondblclick'],['SVGElement', 'ondrag'],['SVGElement', 'ondragend'],['SVGElement', 'ondragenter'],['SVGElement', 'ondragleave'],['SVGElement', 'ondragover'],['SVGElement', 'ondragstart'],['SVGElement', 'ondrop'],['SVGElement', 'ondurationchange'],['SVGElement', 'onemptied'],['SVGElement', 'onended'],['SVGElement', 'onerror'],['SVGElement', 'onfocus'],['SVGElement', 'onformdata'],['SVGElement', 'oninput'],['SVGElement', 'oninvalid'],['SVGElement', 'onkeydown'],['SVGElement', 'onkeypress'],['SVGElement', 'onkeyup'],['SVGElement', 'onload'],['SVGElement', 'onloadeddata'],['SVGElement', 'onloadedmetadata'],['SVGElement', 'onloadstart'],['SVGElement', 'onmousedown'],['SVGElement', 'onmouseenter'],['SVGElement', 'onmouseleave'],['SVGElement', 'onmousemove'],['SVGElement', 'onmouseout'],['SVGElement', 'onmouseover'],['SVGElement', 'onmouseup'],['SVGElement', 'onmousewheel'],['SVGElement', 'onpause'],['SVGElement', 'onplay'],['SVGElement', 'onplaying'],['SVGElement', 'onprogress'],['SVGElement', 'onratechange'],['SVGElement', 'onreset'],['SVGElement', 'onresize'],['SVGElement', 'onscroll'],['SVGElement', 'onseeked'],['SVGElement', 'onseeking'],['SVGElement', 'onselect'],['SVGElement', 'onstalled'],['SVGElement', 'onsubmit'],['SVGElement', 'onsuspend'],['SVGElement', 'ontimeupdate'],['SVGElement', 'ontoggle'],['SVGElement', 'onvolumechange'],['SVGElement', 'onwaiting'],['SVGElement', 'onwebkitanimationend'],['SVGElement', 'onwebkitanimationiteration'],['SVGElement', 'onwebkitanimationstart'],['SVGElement', 'onwebkittransitionend'],['SVGElement', 'onwheel'],['SVGElement', 'onauxclick'],['SVGElement', 'ongotpointercapture'],['SVGElement', 'onlostpointercapture'],['SVGElement', 'onpointerdown'],['SVGElement', 'onpointermove'],['SVGElement', 'onpointerup'],['SVGElement', 'onpointercancel'],['SVGElement', 'onpointerover'],['SVGElement', 'onpointerout'],['SVGElement', 'onpointerenter'],['SVGElement', 'onpointerleave'],['SVGElement', 'onselectstart'],['SVGElement', 'onselectionchange'],['SVGElement', 'onanimationend'],['SVGElement', 'onanimationiteration'],['SVGElement', 'onanimationstart'],['SVGElement', 'ontransitionrun'],['SVGElement', 'ontransitionstart'],['SVGElement', 'ontransitionend'],['SVGElement', 'ontransitioncancel'],['SVGElement', 'oncopy'],['SVGElement', 'oncut'],['SVGElement', 'onpaste'],['SVGElement', 'dataset'],['SVGElement', 'nonce'],['SVGElement', 'autofocus'],['SVGElement', 'tabIndex'],['SVGElement', 'onpointerrawupdate'],['SVGComponentTransferFunctionElement', 'type'],['SVGComponentTransferFunctionElement', 'tableValues'],['SVGComponentTransferFunctionElement', 'slope'],['SVGComponentTransferFunctionElement', 'intercept'],['SVGComponentTransferFunctionElement', 'amplitude'],['SVGComponentTransferFunctionElement', 'exponent'],['SVGComponentTransferFunctionElement', 'offset'],['SVGClipPathElement', 'clipPathUnits'],['SVGCircleElement', 'cx'],['SVGCircleElement', 'cy'],['SVGCircleElement', 'r'],['SVGAnimationElement', 'targetElement'],['SVGAnimationElement', 'onbegin'],['SVGAnimationElement', 'onend'],['SVGAnimationElement', 'onrepeat'],['SVGAnimationElement', 'requiredExtensions'],['SVGAnimationElement', 'systemLanguage'],['SVGAnimatedTransformList', 'baseVal'],['SVGAnimatedTransformList', 'animVal'],['SVGAnimatedString', 'baseVal'],['SVGAnimatedString', 'animVal'],['SVGAnimatedRect', 'baseVal'],['SVGAnimatedRect', 'animVal'],['SVGAnimatedPreserveAspectRatio', 'baseVal'],['SVGAnimatedPreserveAspectRatio', 'animVal'],['SVGAnimatedNumberList', 'baseVal'],['SVGAnimatedNumberList', 'animVal'],['SVGAnimatedNumber', 'baseVal'],['SVGAnimatedNumber', 'animVal'],['SVGAnimatedLengthList', 'baseVal'],['SVGAnimatedLengthList', 'animVal'],['SVGAnimatedLength', 'baseVal'],['SVGAnimatedLength', 'animVal'],['SVGAnimatedInteger', 'baseVal'],['SVGAnimatedInteger', 'animVal'],['SVGAnimatedEnumeration', 'baseVal'],['SVGAnimatedEnumeration', 'animVal'],['SVGAnimatedBoolean', 'baseVal'],['SVGAnimatedBoolean', 'animVal'],['SVGAnimatedAngle', 'baseVal'],['SVGAnimatedAngle', 'animVal'],['SVGAngle', 'unitType'],['SVGAngle', 'value'],['SVGAngle', 'valueInSpecifiedUnits'],['SVGAngle', 'valueAsString'],['SVGAElement', 'target'],['SVGAElement', 'href'],['Response', 'type'],['Response', 'url'],['Response', 'redirected'],['Response', 'status'],['Response', 'ok'],['Response', 'statusText'],['Response', 'headers'],['Response', 'body'],['Response', 'bodyUsed'],['ResizeObserverSize', 'inlineSize'],['ResizeObserverSize', 'blockSize'],['ResizeObserverEntry', 'target'],['ResizeObserverEntry', 'contentRect'],['ResizeObserverEntry', 'contentBoxSize'],['ResizeObserverEntry', 'borderBoxSize'],['ResizeObserverEntry', 'devicePixelContentBoxSize'],['Request', 'method'],['Request', 'url'],['Request', 'headers'],['Request', 'destination'],['Request', 'referrer'],['Request', 'referrerPolicy'],['Request', 'mode'],['Request', 'credentials'],['Request', 'cache'],['Request', 'redirect'],['Request', 'integrity'],['Request', 'keepalive'],['Request', 'signal'],['Request', 'isHistoryNavigation'],['Request', 'bodyUsed'],['ReadableStreamDefaultReader', 'closed'],['ReadableStreamDefaultController', 'desiredSize'],['ReadableStreamBYOBRequest', 'view'],['ReadableStreamBYOBReader', 'closed'],['ReadableStream', 'locked'],['ReadableByteStreamController', 'byobRequest'],['ReadableByteStreamController', 'desiredSize'],['Range', 'commonAncestorContainer'],['RadioNodeList', 'value'],['RTCTrackEvent', 'receiver'],['RTCTrackEvent', 'track'],['RTCTrackEvent', 'streams'],['RTCTrackEvent', 'transceiver'],['RTCStatsReport', 'size'],['RTCSessionDescription', 'type'],['RTCSessionDescription', 'sdp'],['RTCSctpTransport', 'transport'],['RTCSctpTransport', 'state'],['RTCSctpTransport', 'maxMessageSize'],['RTCSctpTransport', 'maxChannels'],['RTCSctpTransport', 'onstatechange'],['RTCRtpTransceiver', 'mid'],['RTCRtpTransceiver', 'sender'],['RTCRtpTransceiver', 'receiver'],['RTCRtpTransceiver', 'stopped'],['RTCRtpTransceiver', 'direction'],['RTCRtpTransceiver', 'currentDirection'],['RTCRtpSender', 'track'],['RTCRtpSender', 'transport'],['RTCRtpSender', 'rtcpTransport'],['RTCRtpSender', 'dtmf'],['RTCRtpReceiver', 'track'],['RTCRtpReceiver', 'transport'],['RTCRtpReceiver', 'rtcpTransport'],['RTCRtpReceiver', 'playoutDelayHint'],['RTCPeerConnectionIceEvent', 'candidate'],['RTCPeerConnectionIceErrorEvent', 'address'],['RTCPeerConnectionIceErrorEvent', 'port'],['RTCPeerConnectionIceErrorEvent', 'hostCandidate'],['RTCPeerConnectionIceErrorEvent', 'url'],['RTCPeerConnectionIceErrorEvent', 'errorCode'],['RTCPeerConnectionIceErrorEvent', 'errorText'],['RTCPeerConnection', 'localDescription'],['RTCPeerConnection', 'currentLocalDescription'],['RTCPeerConnection', 'pendingLocalDescription'],['RTCPeerConnection', 'remoteDescription'],['RTCPeerConnection', 'currentRemoteDescription'],['RTCPeerConnection', 'pendingRemoteDescription'],['RTCPeerConnection', 'signalingState'],['RTCPeerConnection', 'iceGatheringState'],['RTCPeerConnection', 'iceConnectionState'],['RTCPeerConnection', 'connectionState'],['RTCPeerConnection', 'canTrickleIceCandidates'],['RTCPeerConnection', 'onnegotiationneeded'],['RTCPeerConnection', 'onicecandidate'],['RTCPeerConnection', 'onsignalingstatechange'],['RTCPeerConnection', 'oniceconnectionstatechange'],['RTCPeerConnection', 'onconnectionstatechange'],['RTCPeerConnection', 'onicegatheringstatechange'],['RTCPeerConnection', 'onicecandidateerror'],['RTCPeerConnection', 'ontrack'],['RTCPeerConnection', 'sctp'],['RTCPeerConnection', 'ondatachannel'],['RTCPeerConnection', 'onaddstream'],['RTCPeerConnection', 'onremovestream'],['RTCIceCandidate', 'candidate'],['RTCIceCandidate', 'sdpMid'],['RTCIceCandidate', 'sdpMLineIndex'],['RTCIceCandidate', 'foundation'],['RTCIceCandidate', 'component'],['RTCIceCandidate', 'priority'],['RTCIceCandidate', 'address'],['RTCIceCandidate', 'protocol'],['RTCIceCandidate', 'port'],['RTCIceCandidate', 'type'],['RTCIceCandidate', 'tcpType'],['RTCIceCandidate', 'relatedAddress'],['RTCIceCandidate', 'relatedPort'],['RTCIceCandidate', 'usernameFragment'],['RTCErrorEvent', 'error'],['RTCEncodedVideoFrame', 'type'],['RTCEncodedVideoFrame', 'timestamp'],['RTCEncodedVideoFrame', 'data'],['RTCEncodedAudioFrame', 'timestamp'],['RTCEncodedAudioFrame', 'data'],['RTCDtlsTransport', 'iceTransport'],['RTCDtlsTransport', 'state'],['RTCDtlsTransport', 'onstatechange'],['RTCDtlsTransport', 'onerror'],['RTCDataChannelEvent', 'channel'],['RTCDataChannel', 'label'],['RTCDataChannel', 'ordered'],['RTCDataChannel', 'maxPacketLifeTime'],['RTCDataChannel', 'maxRetransmits'],['RTCDataChannel', 'protocol'],['RTCDataChannel', 'negotiated'],['RTCDataChannel', 'id'],['RTCDataChannel', 'readyState'],['RTCDataChannel', 'bufferedAmount'],['RTCDataChannel', 'bufferedAmountLowThreshold'],['RTCDataChannel', 'onopen'],['RTCDataChannel', 'onbufferedamountlow'],['RTCDataChannel', 'onerror'],['RTCDataChannel', 'onclosing'],['RTCDataChannel', 'onclose'],['RTCDataChannel', 'onmessage'],['RTCDataChannel', 'binaryType'],['RTCDataChannel', 'reliable'],['RTCDTMFToneChangeEvent', 'tone'],['RTCDTMFSender', 'ontonechange'],['RTCDTMFSender', 'canInsertDTMF'],['RTCDTMFSender', 'toneBuffer'],['RTCCertificate', 'expires'],['PromiseRejectionEvent', 'promise'],['PromiseRejectionEvent', 'reason'],['ProgressEvent', 'lengthComputable'],['ProgressEvent', 'loaded'],['ProgressEvent', 'total'],['ProcessingInstruction', 'target'],['ProcessingInstruction', 'sheet'],['PopStateEvent', 'state'],['PointerEvent', 'pointerId'],['PointerEvent', 'width'],['PointerEvent', 'height'],['PointerEvent', 'pressure'],['PointerEvent', 'tiltX'],['PointerEvent', 'tiltY'],['PointerEvent', 'azimuthAngle'],['PointerEvent', 'altitudeAngle'],['PointerEvent', 'tangentialPressure'],['PointerEvent', 'twist'],['PointerEvent', 'pointerType'],['PointerEvent', 'isPrimary'],['PluginArray', 'length'],['Plugin', 'name'],['Plugin', 'filename'],['Plugin', 'description'],['Plugin', 'length'],['PerformanceTiming', 'navigationStart'],['PerformanceTiming', 'unloadEventStart'],['PerformanceTiming', 'unloadEventEnd'],['PerformanceTiming', 'redirectStart'],['PerformanceTiming', 'redirectEnd'],['PerformanceTiming', 'fetchStart'],['PerformanceTiming', 'domainLookupStart'],['PerformanceTiming', 'domainLookupEnd'],['PerformanceTiming', 'connectStart'],['PerformanceTiming', 'connectEnd'],['PerformanceTiming', 'secureConnectionStart'],['PerformanceTiming', 'requestStart'],['PerformanceTiming', 'responseStart'],['PerformanceTiming', 'responseEnd'],['PerformanceTiming', 'domLoading'],['PerformanceTiming', 'domInteractive'],['PerformanceTiming', 'domContentLoadedEventStart'],['PerformanceTiming', 'domContentLoadedEventEnd'],['PerformanceTiming', 'domComplete'],['PerformanceTiming', 'loadEventStart'],['PerformanceTiming', 'loadEventEnd'],['PerformanceServerTiming', 'name'],['PerformanceServerTiming', 'duration'],['PerformanceServerTiming', 'description'],['PerformanceResourceTiming', 'initiatorType'],['PerformanceResourceTiming', 'nextHopProtocol'],['PerformanceResourceTiming', 'workerStart'],['PerformanceResourceTiming', 'redirectStart'],['PerformanceResourceTiming', 'redirectEnd'],['PerformanceResourceTiming', 'fetchStart'],['PerformanceResourceTiming', 'domainLookupStart'],['PerformanceResourceTiming', 'domainLookupEnd'],['PerformanceResourceTiming', 'connectStart'],['PerformanceResourceTiming', 'connectEnd'],['PerformanceResourceTiming', 'secureConnectionStart'],['PerformanceResourceTiming', 'requestStart'],['PerformanceResourceTiming', 'responseStart'],['PerformanceResourceTiming', 'responseEnd'],['PerformanceResourceTiming', 'transferSize'],['PerformanceResourceTiming', 'encodedBodySize'],['PerformanceResourceTiming', 'decodedBodySize'],['PerformanceResourceTiming', 'serverTiming'],['PerformanceNavigationTiming', 'unloadEventStart'],['PerformanceNavigationTiming', 'unloadEventEnd'],['PerformanceNavigationTiming', 'domInteractive'],['PerformanceNavigationTiming', 'domContentLoadedEventStart'],['PerformanceNavigationTiming', 'domContentLoadedEventEnd'],['PerformanceNavigationTiming', 'domComplete'],['PerformanceNavigationTiming', 'loadEventStart'],['PerformanceNavigationTiming', 'loadEventEnd'],['PerformanceNavigationTiming', 'type'],['PerformanceNavigationTiming', 'redirectCount'],['PerformanceNavigation', 'type'],['PerformanceNavigation', 'redirectCount'],['PerformanceMeasure', 'detail'],['PerformanceMark', 'detail'],['PerformanceLongTaskTiming', 'attribution'],['PerformanceEventTiming', 'processingStart'],['PerformanceEventTiming', 'processingEnd'],['PerformanceEventTiming', 'cancelable'],['PerformanceEventTiming', 'target'],['PerformanceEntry', 'name'],['PerformanceEntry', 'entryType'],['PerformanceEntry', 'startTime'],['PerformanceEntry', 'duration'],['PerformanceElementTiming', 'renderTime'],['PerformanceElementTiming', 'loadTime'],['PerformanceElementTiming', 'intersectionRect'],['PerformanceElementTiming', 'identifier'],['PerformanceElementTiming', 'naturalWidth'],['PerformanceElementTiming', 'naturalHeight'],['PerformanceElementTiming', 'id'],['PerformanceElementTiming', 'element'],['PerformanceElementTiming', 'url'],['Performance', 'timeOrigin'],['Performance', 'onresourcetimingbufferfull'],['Performance', 'timing'],['Performance', 'navigation'],['Performance', 'memory'],['Performance', 'eventCounts'],['PannerNode', 'panningModel'],['PannerNode', 'positionX'],['PannerNode', 'positionY'],['PannerNode', 'positionZ'],['PannerNode', 'orientationX'],['PannerNode', 'orientationY'],['PannerNode', 'orientationZ'],['PannerNode', 'distanceModel'],['PannerNode', 'refDistance'],['PannerNode', 'maxDistance'],['PannerNode', 'rolloffFactor'],['PannerNode', 'coneInnerAngle'],['PannerNode', 'coneOuterAngle'],['PannerNode', 'coneOuterGain'],['PageTransitionEvent', 'persisted'],['OverconstrainedError', 'name'],['OverconstrainedError', 'message'],['OverconstrainedError', 'constraint'],['OscillatorNode', 'type'],['OscillatorNode', 'frequency'],['OscillatorNode', 'detune'],['OffscreenCanvasRenderingContext2D', 'canvas'],['OffscreenCanvasRenderingContext2D', 'globalAlpha'],['OffscreenCanvasRenderingContext2D', 'globalCompositeOperation'],['OffscreenCanvasRenderingContext2D', 'filter'],['OffscreenCanvasRenderingContext2D', 'imageSmoothingEnabled'],['OffscreenCanvasRenderingContext2D', 'imageSmoothingQuality'],['OffscreenCanvasRenderingContext2D', 'strokeStyle'],['OffscreenCanvasRenderingContext2D', 'fillStyle'],['OffscreenCanvasRenderingContext2D', 'shadowOffsetX'],['OffscreenCanvasRenderingContext2D', 'shadowOffsetY'],['OffscreenCanvasRenderingContext2D', 'shadowBlur'],['OffscreenCanvasRenderingContext2D', 'shadowColor'],['OffscreenCanvasRenderingContext2D', 'lineWidth'],['OffscreenCanvasRenderingContext2D', 'lineCap'],['OffscreenCanvasRenderingContext2D', 'lineJoin'],['OffscreenCanvasRenderingContext2D', 'miterLimit'],['OffscreenCanvasRenderingContext2D', 'lineDashOffset'],['OffscreenCanvasRenderingContext2D', 'font'],['OffscreenCanvasRenderingContext2D', 'textAlign'],['OffscreenCanvasRenderingContext2D', 'textBaseline'],['OffscreenCanvasRenderingContext2D', 'direction'],['OffscreenCanvas', 'width'],['OffscreenCanvas', 'height'],['OfflineAudioContext', 'oncomplete'],['OfflineAudioContext', 'length'],['OfflineAudioCompletionEvent', 'renderedBuffer'],['NodeList', 'length'],['NodeIterator', 'root'],['NodeIterator', 'referenceNode'],['NodeIterator', 'pointerBeforeReferenceNode'],['NodeIterator', 'whatToShow'],['NodeIterator', 'filter'],['Node', 'nodeType'],['Node', 'nodeName'],['Node', 'baseURI'],['Node', 'isConnected'],['Node', 'ownerDocument'],['Node', 'parentNode'],['Node', 'parentElement'],['Node', 'childNodes'],['Node', 'firstChild'],['Node', 'lastChild'],['Node', 'previousSibling'],['Node', 'nextSibling'],['Node', 'nodeValue'],['Node', 'textContent'],['NetworkInformation', 'onchange'],['NetworkInformation', 'effectiveType'],['NetworkInformation', 'rtt'],['NetworkInformation', 'downlink'],['NetworkInformation', 'saveData'],
    ['NamedNodeMap', 'length'],['MutationRecord', 'type'],['MutationRecord', 'target'],['MutationRecord', 'addedNodes'],['MutationRecord', 'removedNodes'],['MutationRecord', 'previousSibling'],['MutationRecord', 'nextSibling'],['MutationRecord', 'attributeName'],['MutationRecord', 'attributeNamespace'],['MutationRecord', 'oldValue'],['MutationEvent', 'relatedNode'],['MutationEvent', 'prevValue'],['MutationEvent', 'newValue'],['MutationEvent', 'attrName'],['MutationEvent', 'attrChange'],
    
    ['MimeTypeArray', 'length'],['MimeType', 'type'],['MimeType', 'suffixes'],['MimeType', 'description'],['MimeType', 'enabledPlugin'],['MessagePort', 'onmessage'],['MessagePort', 'onmessageerror'],['MessageEvent', 'data'],['MessageEvent', 'origin'],['MessageEvent', 'lastEventId'],['MessageEvent', 'source'],['MessageEvent', 'ports'],['MessageEvent', 'userActivation'],['MessageChannel', 'port1'],['MessageChannel', 'port2'],['MediaStreamTrackEvent', 'track'],['MediaStreamTrack', 'kind'],['MediaStreamTrack', 'id'],['MediaStreamTrack', 'label'],['MediaStreamTrack', 'enabled'],['MediaStreamTrack', 'muted'],['MediaStreamTrack', 'onmute'],['MediaStreamTrack', 'onunmute'],['MediaStreamTrack', 'readyState'],['MediaStreamTrack', 'onended'],['MediaStreamTrack', 'contentHint'],['MediaStreamEvent', 'stream'],['MediaStreamAudioSourceNode', 'mediaStream'],['MediaStreamAudioDestinationNode', 'stream'],['MediaStream', 'id'],['MediaStream', 'active'],['MediaStream', 'onaddtrack'],['MediaStream', 'onremovetrack'],['MediaStream', 'onactive'],['MediaStream', 'oninactive'],['MediaRecorder', 'stream'],['MediaRecorder', 'mimeType'],['MediaRecorder', 'state'],['MediaRecorder', 'onstart'],['MediaRecorder', 'onstop'],['MediaRecorder', 'ondataavailable'],['MediaRecorder', 'onpause'],['MediaRecorder', 'onresume'],['MediaRecorder', 'onerror'],['MediaRecorder', 'videoBitsPerSecond'],['MediaRecorder', 'audioBitsPerSecond'],['MediaRecorder', 'audioBitrateMode'],['MediaQueryListEvent', 'media'],['MediaQueryListEvent', 'matches'],['MediaQueryList', 'media'],['MediaQueryList', 'matches'],['MediaQueryList', 'onchange'],['MediaList', 'length'],['MediaList', 'mediaText'],['MediaError', 'code'],['MediaError', 'message'],['MediaEncryptedEvent', 'initDataType'],['MediaEncryptedEvent', 'initData'],['MediaElementAudioSourceNode', 'mediaElement'],['LayoutShiftAttribution', 'node'],['LayoutShiftAttribution', 'previousRect'],['LayoutShiftAttribution', 'currentRect'],['LayoutShift', 'value'],['LayoutShift', 'hadRecentInput'],['LayoutShift', 'lastInputTime'],['LayoutShift', 'sources'],['LargestContentfulPaint', 'renderTime'],['LargestContentfulPaint', 'loadTime'],['LargestContentfulPaint', 'size'],['LargestContentfulPaint', 'id'],['LargestContentfulPaint', 'url'],['LargestContentfulPaint', 'element'],['KeyframeEffect', 'target'],['KeyframeEffect', 'pseudoElement'],['KeyframeEffect', 'composite'],['KeyboardEvent', 'key'],['KeyboardEvent', 'code'],['KeyboardEvent', 'location'],['KeyboardEvent', 'ctrlKey'],['KeyboardEvent', 'shiftKey'],['KeyboardEvent', 'altKey'],['KeyboardEvent', 'metaKey'],['KeyboardEvent', 'repeat'],['KeyboardEvent', 'isComposing'],['KeyboardEvent', 'charCode'],['KeyboardEvent', 'keyCode'],['IntersectionObserverEntry', 'time'],['IntersectionObserverEntry', 'rootBounds'],['IntersectionObserverEntry', 'boundingClientRect'],['IntersectionObserverEntry', 'intersectionRect'],['IntersectionObserverEntry', 'isIntersecting'],['IntersectionObserverEntry', 'isVisible'],['IntersectionObserverEntry', 'intersectionRatio'],['IntersectionObserverEntry', 'target'],['IntersectionObserver', 'root'],['IntersectionObserver', 'rootMargin'],['IntersectionObserver', 'thresholds'],['IntersectionObserver', 'delay'],['IntersectionObserver', 'trackVisibility'],['InputEvent', 'data'],['InputEvent', 'isComposing'],['InputEvent', 'inputType'],['InputEvent', 'dataTransfer'],['InputDeviceCapabilities', 'firesTouchEvents'],['ImageData', 'width'],['ImageData', 'height'],['ImageData', 'data'],['ImageData', 'colorSpace'],['ImageCapture', 'track'],['ImageBitmapRenderingContext', 'canvas'],['ImageBitmap', 'width'],['ImageBitmap', 'height'],['IdleDeadline', 'didTimeout'],['IDBVersionChangeEvent', 'oldVersion'],['IDBVersionChangeEvent', 'newVersion'],['IDBVersionChangeEvent', 'dataLoss'],['IDBVersionChangeEvent', 'dataLossMessage'],['IDBTransaction', 'objectStoreNames'],['IDBTransaction', 'mode'],['IDBTransaction', 'db'],['IDBTransaction', 'error'],['IDBTransaction', 'onabort'],['IDBTransaction', 'oncomplete'],['IDBTransaction', 'onerror'],['IDBTransaction', 'durability'],['IDBRequest', 'result'],['IDBRequest', 'error'],['IDBRequest', 'source'],['IDBRequest', 'transaction'],['IDBRequest', 'readyState'],['IDBRequest', 'onsuccess'],['IDBRequest', 'onerror'],['IDBOpenDBRequest', 'onblocked'],['IDBOpenDBRequest', 'onupgradeneeded'],['IDBObjectStore', 'name'],['IDBObjectStore', 'keyPath'],['IDBObjectStore', 'indexNames'],['IDBObjectStore', 'transaction'],['IDBObjectStore', 'autoIncrement'],['IDBKeyRange', 'lower'],['IDBKeyRange', 'upper'],['IDBKeyRange', 'lowerOpen'],['IDBKeyRange', 'upperOpen'],['IDBIndex', 'name'],['IDBIndex', 'objectStore'],['IDBIndex', 'keyPath'],['IDBIndex', 'multiEntry'],['IDBIndex', 'unique'],['IDBDatabase', 'name'],['IDBDatabase', 'version'],['IDBDatabase', 'objectStoreNames'],['IDBDatabase', 'onabort'],['IDBDatabase', 'onclose'],['IDBDatabase', 'onerror'],['IDBDatabase', 'onversionchange'],['IDBCursorWithValue', 'value'],['IDBCursor', 'source'],['IDBCursor', 'direction'],['IDBCursor', 'key'],['IDBCursor', 'primaryKey'],['IDBCursor', 'request'],['History', 'length'],['History', 'scrollRestoration'],['History', 'state'],['HashChangeEvent', 'oldURL'],['HashChangeEvent', 'newURL'],['HTMLVideoElement', 'width'],['HTMLVideoElement', 'height'],['HTMLVideoElement', 'videoWidth'],['HTMLVideoElement', 'videoHeight'],['HTMLVideoElement', 'poster'],['HTMLVideoElement', 'webkitDecodedFrameCount'],['HTMLVideoElement', 'webkitDroppedFrameCount'],['HTMLVideoElement', 'playsInline'],['HTMLVideoElement', 'webkitSupportsFullscreen'],['HTMLVideoElement', 'webkitDisplayingFullscreen'],['HTMLVideoElement', 'onenterpictureinpicture'],['HTMLVideoElement', 'onleavepictureinpicture'],['HTMLVideoElement', 'disablePictureInPicture'],['HTMLUListElement', 'compact'],['HTMLUListElement', 'type'],['HTMLTrackElement', 'kind'],['HTMLTrackElement', 'src'],['HTMLTrackElement', 'srclang'],['HTMLTrackElement', 'label'],['HTMLTrackElement', 'default'],['HTMLTrackElement', 'readyState'],['HTMLTrackElement', 'track'],['HTMLTitleElement', 'text'],['HTMLTimeElement', 'dateTime'],['HTMLTextAreaElement', 'autocomplete'],['HTMLTextAreaElement', 'cols'],['HTMLTextAreaElement', 'dirName'],['HTMLTextAreaElement', 'disabled'],['HTMLTextAreaElement', 'form'],['HTMLTextAreaElement', 'maxLength'],['HTMLTextAreaElement', 'minLength'],['HTMLTextAreaElement', 'name'],['HTMLTextAreaElement', 'placeholder'],['HTMLTextAreaElement', 'readOnly'],['HTMLTextAreaElement', 'required'],['HTMLTextAreaElement', 'rows'],['HTMLTextAreaElement', 'wrap'],['HTMLTextAreaElement', 'type'],['HTMLTextAreaElement', 'defaultValue'],['HTMLTextAreaElement', 'value'],['HTMLTextAreaElement', 'textLength'],['HTMLTextAreaElement', 'willValidate'],['HTMLTextAreaElement', 'validity'],['HTMLTextAreaElement', 'validationMessage'],['HTMLTextAreaElement', 'labels'],['HTMLTextAreaElement', 'selectionStart'],['HTMLTextAreaElement', 'selectionEnd'],['HTMLTextAreaElement', 'selectionDirection'],['HTMLTemplateElement', 'content'],['HTMLTemplateElement', 'shadowRoot'],['HTMLTableSectionElement', 'rows'],['HTMLTableSectionElement', 'align'],['HTMLTableSectionElement', 'ch'],['HTMLTableSectionElement', 'chOff'],['HTMLTableSectionElement', 'vAlign'],['HTMLTableRowElement', 'rowIndex'],['HTMLTableRowElement', 'sectionRowIndex'],['HTMLTableRowElement', 'cells'],['HTMLTableRowElement', 'align'],['HTMLTableRowElement', 'ch'],['HTMLTableRowElement', 'chOff'],['HTMLTableRowElement', 'vAlign'],['HTMLTableRowElement', 'bgColor'],['HTMLTableElement', 'caption'],['HTMLTableElement', 'tHead'],['HTMLTableElement', 'tFoot'],['HTMLTableElement', 'tBodies'],['HTMLTableElement', 'rows'],['HTMLTableElement', 'align'],['HTMLTableElement', 'border'],['HTMLTableElement', 'frame'],['HTMLTableElement', 'rules'],['HTMLTableElement', 'summary'],['HTMLTableElement', 'width'],['HTMLTableElement', 'bgColor'],['HTMLTableElement', 'cellPadding'],['HTMLTableElement', 'cellSpacing'],['HTMLTableColElement', 'span'],['HTMLTableColElement', 'align'],['HTMLTableColElement', 'ch'],['HTMLTableColElement', 'chOff'],['HTMLTableColElement', 'vAlign'],['HTMLTableColElement', 'width'],['HTMLTableCellElement', 'colSpan'],['HTMLTableCellElement', 'rowSpan'],['HTMLTableCellElement', 'headers'],['HTMLTableCellElement', 'cellIndex'],['HTMLTableCellElement', 'align'],['HTMLTableCellElement', 'axis'],['HTMLTableCellElement', 'height'],['HTMLTableCellElement', 'width'],['HTMLTableCellElement', 'ch'],['HTMLTableCellElement', 'chOff'],['HTMLTableCellElement', 'noWrap'],['HTMLTableCellElement', 'vAlign'],['HTMLTableCellElement', 'bgColor'],['HTMLTableCellElement', 'abbr'],['HTMLTableCellElement', 'scope'],['HTMLTableCaptionElement', 'align'],['HTMLStyleElement', 'disabled'],['HTMLStyleElement', 'media'],['HTMLStyleElement', 'type'],['HTMLStyleElement', 'sheet'],['HTMLSourceElement', 'src'],['HTMLSourceElement', 'type'],['HTMLSourceElement', 'srcset'],['HTMLSourceElement', 'sizes'],['HTMLSourceElement', 'media'],['HTMLSourceElement', 'width'],['HTMLSourceElement', 'height'],['HTMLSlotElement', 'name'],['HTMLSelectElement', 'autocomplete'],['HTMLSelectElement', 'disabled'],['HTMLSelectElement', 'form'],['HTMLSelectElement', 'multiple'],['HTMLSelectElement', 'name'],['HTMLSelectElement', 'required'],['HTMLSelectElement', 'size'],['HTMLSelectElement', 'type'],['HTMLSelectElement', 'options'],['HTMLSelectElement', 'length'],['HTMLSelectElement', 'selectedOptions'],['HTMLSelectElement', 'selectedIndex'],['HTMLSelectElement', 'value'],['HTMLSelectElement', 'willValidate'],['HTMLSelectElement', 'validity'],['HTMLSelectElement', 'validationMessage'],['HTMLSelectElement', 'labels'],['HTMLScriptElement', 'src'],['HTMLScriptElement', 'type'],['HTMLScriptElement', 'noModule'],['HTMLScriptElement', 'charset'],['HTMLScriptElement', 'async'],['HTMLScriptElement', 'defer'],['HTMLScriptElement', 'crossOrigin'],['HTMLScriptElement', 'text'],['HTMLScriptElement', 'referrerPolicy'],['HTMLScriptElement', 'event'],['HTMLScriptElement', 'htmlFor'],['HTMLScriptElement', 'integrity'],['HTMLQuoteElement', 'cite'],['HTMLProgressElement', 'value'],['HTMLProgressElement', 'max'],['HTMLProgressElement', 'position'],['HTMLProgressElement', 'labels'],['HTMLPreElement', 'width'],['HTMLParamElement', 'name'],['HTMLParamElement', 'value'],['HTMLParamElement', 'type'],['HTMLParamElement', 'valueType'],['HTMLParagraphElement', 'align'],['HTMLOutputElement', 'htmlFor'],['HTMLOutputElement', 'form'],['HTMLOutputElement', 'name'],['HTMLOutputElement', 'type'],['HTMLOutputElement', 'defaultValue'],['HTMLOutputElement', 'value'],['HTMLOutputElement', 'willValidate'],['HTMLOutputElement', 'validity'],['HTMLOutputElement', 'validationMessage'],['HTMLOutputElement', 'labels'],['HTMLOptionsCollection', 'length'],['HTMLOptionsCollection', 'selectedIndex'],['HTMLOptionElement', 'disabled'],['HTMLOptionElement', 'form'],['HTMLOptionElement', 'label'],['HTMLOptionElement', 'defaultSelected'],['HTMLOptionElement', 'selected'],['HTMLOptionElement', 'value'],['HTMLOptionElement', 'text'],['HTMLOptionElement', 'index'],['HTMLOptGroupElement', 'disabled'],['HTMLOptGroupElement', 'label'],['HTMLObjectElement', 'data'],['HTMLObjectElement', 'type'],['HTMLObjectElement', 'name'],['HTMLObjectElement', 'useMap'],['HTMLObjectElement', 'form'],['HTMLObjectElement', 'width'],['HTMLObjectElement', 'height'],['HTMLObjectElement', 'contentDocument'],['HTMLObjectElement', 'contentWindow'],['HTMLObjectElement', 'willValidate'],['HTMLObjectElement', 'validity'],['HTMLObjectElement', 'validationMessage'],['HTMLObjectElement', 'align'],['HTMLObjectElement', 'archive'],['HTMLObjectElement', 'code'],['HTMLObjectElement', 'declare'],['HTMLObjectElement', 'hspace'],['HTMLObjectElement', 'standby'],['HTMLObjectElement', 'vspace'],['HTMLObjectElement', 'codeBase'],['HTMLObjectElement', 'codeType'],['HTMLObjectElement', 'border'],['HTMLOListElement', 'reversed'],['HTMLOListElement', 'start'],['HTMLOListElement', 'type'],['HTMLOListElement', 'compact'],['HTMLModElement', 'cite'],['HTMLModElement', 'dateTime'],['HTMLMeterElement', 'value'],['HTMLMeterElement', 'min'],['HTMLMeterElement', 'max'],['HTMLMeterElement', 'low'],['HTMLMeterElement', 'high'],['HTMLMeterElement', 'optimum'],['HTMLMeterElement', 'labels'],['HTMLMetaElement', 'name'],['HTMLMetaElement', 'httpEquiv'],['HTMLMetaElement', 'content'],['HTMLMetaElement', 'scheme'],['HTMLMetaElement', 'media'],['HTMLMenuElement', 'compact'],['HTMLMediaElement', 'error'],['HTMLMediaElement', 'src'],['HTMLMediaElement', 'currentSrc'],['HTMLMediaElement', 'crossOrigin'],['HTMLMediaElement', 'networkState'],['HTMLMediaElement', 'preload'],['HTMLMediaElement', 'buffered'],['HTMLMediaElement', 'readyState'],['HTMLMediaElement', 'seeking'],['HTMLMediaElement', 'currentTime'],['HTMLMediaElement', 'duration'],['HTMLMediaElement', 'paused'],['HTMLMediaElement', 'defaultPlaybackRate'],['HTMLMediaElement', 'playbackRate'],['HTMLMediaElement', 'played'],['HTMLMediaElement', 'seekable'],['HTMLMediaElement', 'ended'],['HTMLMediaElement', 'autoplay'],['HTMLMediaElement', 'loop'],['HTMLMediaElement', 'controls'],['HTMLMediaElement', 'controlsList'],['HTMLMediaElement', 'volume'],['HTMLMediaElement', 'muted'],['HTMLMediaElement', 'defaultMuted'],['HTMLMediaElement', 'textTracks'],['HTMLMediaElement', 'webkitAudioDecodedByteCount'],['HTMLMediaElement', 'webkitVideoDecodedByteCount'],['HTMLMediaElement', 'onencrypted'],['HTMLMediaElement', 'onwaitingforkey'],['HTMLMediaElement', 'srcObject'],['HTMLMediaElement', 'preservesPitch'],['HTMLMediaElement', 'sinkId'],['HTMLMediaElement', 'remote'],['HTMLMediaElement', 'disableRemotePlayback'],['HTMLMarqueeElement', 'behavior'],['HTMLMarqueeElement', 'bgColor'],['HTMLMarqueeElement', 'direction'],['HTMLMarqueeElement', 'height'],['HTMLMarqueeElement', 'hspace'],['HTMLMarqueeElement', 'loop'],['HTMLMarqueeElement', 'scrollAmount'],['HTMLMarqueeElement', 'scrollDelay'],['HTMLMarqueeElement', 'trueSpeed'],['HTMLMarqueeElement', 'vspace'],['HTMLMarqueeElement', 'width'],['HTMLMapElement', 'name'],['HTMLMapElement', 'areas'],['HTMLLinkElement', 'disabled'],['HTMLLinkElement', 'href'],['HTMLLinkElement', 'crossOrigin'],['HTMLLinkElement', 'rel'],['HTMLLinkElement', 'relList'],['HTMLLinkElement', 'media'],['HTMLLinkElement', 'hreflang'],['HTMLLinkElement', 'type'],['HTMLLinkElement', 'as'],['HTMLLinkElement', 'referrerPolicy'],['HTMLLinkElement', 'sizes'],['HTMLLinkElement', 'imageSrcset'],['HTMLLinkElement', 'imageSizes'],['HTMLLinkElement', 'charset'],['HTMLLinkElement', 'rev'],['HTMLLinkElement', 'target'],['HTMLLinkElement', 'sheet'],['HTMLLinkElement', 'integrity'],['HTMLLegendElement', 'form'],['HTMLLegendElement', 'align'],['HTMLLabelElement', 'form'],['HTMLLabelElement', 'htmlFor'],['HTMLLabelElement', 'control'],['HTMLLIElement', 'value'],['HTMLLIElement', 'type'],['HTMLInputElement', 'accept'],['HTMLInputElement', 'alt'],['HTMLInputElement', 'autocomplete'],['HTMLInputElement', 'defaultChecked'],['HTMLInputElement', 'checked'],['HTMLInputElement', 'dirName'],['HTMLInputElement', 'disabled'],['HTMLInputElement', 'form'],['HTMLInputElement', 'files'],['HTMLInputElement', 'formAction'],['HTMLInputElement', 'formEnctype'],['HTMLInputElement', 'formMethod'],['HTMLInputElement', 'formNoValidate'],['HTMLInputElement', 'formTarget'],['HTMLInputElement', 'height'],['HTMLInputElement', 'indeterminate'],['HTMLInputElement', 'list'],['HTMLInputElement', 'max'],['HTMLInputElement', 'maxLength'],['HTMLInputElement', 'min'],['HTMLInputElement', 'minLength'],['HTMLInputElement', 'multiple'],['HTMLInputElement', 'name'],['HTMLInputElement', 'pattern'],['HTMLInputElement', 'placeholder'],['HTMLInputElement', 'readOnly'],['HTMLInputElement', 'required'],['HTMLInputElement', 'size'],['HTMLInputElement', 'src'],['HTMLInputElement', 'step'],['HTMLInputElement', 'type'],['HTMLInputElement', 'defaultValue'],['HTMLInputElement', 'value'],['HTMLInputElement', 'valueAsDate'],['HTMLInputElement', 'valueAsNumber'],['HTMLInputElement', 'width'],['HTMLInputElement', 'willValidate'],['HTMLInputElement', 'validity'],['HTMLInputElement', 'validationMessage'],['HTMLInputElement', 'labels'],['HTMLInputElement', 'selectionStart'],['HTMLInputElement', 'selectionEnd'],['HTMLInputElement', 'selectionDirection'],['HTMLInputElement', 'align'],['HTMLInputElement', 'useMap'],['HTMLInputElement', 'webkitdirectory'],['HTMLInputElement', 'incremental'],['HTMLInputElement', 'webkitEntries'],['HTMLImageElement', 'alt'],['HTMLImageElement', 'src'],['HTMLImageElement', 'srcset'],['HTMLImageElement', 'sizes'],['HTMLImageElement', 'crossOrigin'],['HTMLImageElement', 'useMap'],['HTMLImageElement', 'isMap'],['HTMLImageElement', 'width'],['HTMLImageElement', 'height'],['HTMLImageElement', 'naturalWidth'],['HTMLImageElement', 'naturalHeight'],['HTMLImageElement', 'complete'],['HTMLImageElement', 'currentSrc'],['HTMLImageElement', 'referrerPolicy'],['HTMLImageElement', 'decoding'],['HTMLImageElement', 'name'],['HTMLImageElement', 'lowsrc'],['HTMLImageElement', 'align'],['HTMLImageElement', 'hspace'],['HTMLImageElement', 'vspace'],['HTMLImageElement', 'longDesc'],['HTMLImageElement', 'border'],['HTMLImageElement', 'x'],['HTMLImageElement', 'y'],['HTMLImageElement', 'loading'],['HTMLIFrameElement', 'src'],['HTMLIFrameElement', 'srcdoc'],['HTMLIFrameElement', 'name'],['HTMLIFrameElement', 'sandbox'],['HTMLIFrameElement', 'allowFullscreen'],['HTMLIFrameElement', 'width'],['HTMLIFrameElement', 'height'],['HTMLIFrameElement', 'contentDocument'],['HTMLIFrameElement', 'contentWindow'],['HTMLIFrameElement', 'referrerPolicy'],['HTMLIFrameElement', 'csp'],['HTMLIFrameElement', 'allow'],['HTMLIFrameElement', 'featurePolicy'],['HTMLIFrameElement', 'align'],['HTMLIFrameElement', 'scrolling'],['HTMLIFrameElement', 'frameBorder'],['HTMLIFrameElement', 'longDesc'],['HTMLIFrameElement', 'marginHeight'],['HTMLIFrameElement', 'marginWidth'],['HTMLIFrameElement', 'loading'],['HTMLIFrameElement', 'allowPaymentRequest'],['HTMLHtmlElement', 'version'],['HTMLHeadingElement', 'align'],['HTMLHRElement', 'align'],['HTMLHRElement', 'color'],['HTMLHRElement', 'noShade'],['HTMLHRElement', 'size'],['HTMLHRElement', 'width'],['HTMLFrameSetElement', 'cols'],['HTMLFrameSetElement', 'rows'],['HTMLFrameSetElement', 'onblur'],['HTMLFrameSetElement', 'onerror'],['HTMLFrameSetElement', 'onfocus'],['HTMLFrameSetElement', 'onload'],['HTMLFrameSetElement', 'onresize'],['HTMLFrameSetElement', 'onscroll'],['HTMLFrameSetElement', 'onafterprint'],['HTMLFrameSetElement', 'onbeforeprint'],['HTMLFrameSetElement', 'onbeforeunload'],['HTMLFrameSetElement', 'onhashchange'],['HTMLFrameSetElement', 'onlanguagechange'],['HTMLFrameSetElement', 'onmessage'],['HTMLFrameSetElement', 'onmessageerror'],['HTMLFrameSetElement', 'onoffline'],['HTMLFrameSetElement', 'ononline'],['HTMLFrameSetElement', 'onpagehide'],['HTMLFrameSetElement', 'onpageshow'],['HTMLFrameSetElement', 'onpopstate'],['HTMLFrameSetElement', 'onrejectionhandled'],['HTMLFrameSetElement', 'onstorage'],['HTMLFrameSetElement', 'onunhandledrejection'],['HTMLFrameSetElement', 'onunload'],['HTMLFrameElement', 'name'],['HTMLFrameElement', 'scrolling'],['HTMLFrameElement', 'src'],['HTMLFrameElement', 'frameBorder'],['HTMLFrameElement', 'longDesc'],['HTMLFrameElement', 'noResize'],['HTMLFrameElement', 'contentDocument'],['HTMLFrameElement', 'contentWindow'],['HTMLFrameElement', 'marginHeight'],['HTMLFrameElement', 'marginWidth'],
    ['HTMLFontElement', 'color'],['HTMLFontElement', 'face'],['HTMLFontElement', 'size'],['HTMLFieldSetElement', 'disabled'],['HTMLFieldSetElement', 'form'],['HTMLFieldSetElement', 'name'],['HTMLFieldSetElement', 'type'],['HTMLFieldSetElement', 'elements'],['HTMLFieldSetElement', 'willValidate'],['HTMLFieldSetElement', 'validity'],['HTMLFieldSetElement', 'validationMessage'],['HTMLEmbedElement', 'src'],['HTMLEmbedElement', 'type'],['HTMLEmbedElement', 'width'],['HTMLEmbedElement', 'height'],['HTMLEmbedElement', 'align'],['HTMLEmbedElement', 'name'],['HTMLElement', 'title'],['HTMLElement', 'lang'],['HTMLElement', 'translate'],['HTMLElement', 'dir'],['HTMLElement', 'hidden'],['HTMLElement', 'accessKey'],['HTMLElement', 'draggable'],['HTMLElement', 'spellcheck'],['HTMLElement', 'autocapitalize'],['HTMLElement', 'contentEditable'],['HTMLElement', 'isContentEditable'],['HTMLElement', 'inputMode'],['HTMLElement', 'offsetParent'],['HTMLElement', 'offsetTop'],['HTMLElement', 'offsetLeft'],['HTMLElement', 'offsetWidth'],['HTMLElement', 'offsetHeight'],['HTMLElement', 'style'],['HTMLElement', 'innerText'],['HTMLElement', 'outerText'],['HTMLElement', 'onbeforexrselect'],['HTMLElement', 'onabort'],['HTMLElement', 'onblur'],['HTMLElement', 'oncancel'],['HTMLElement', 'oncanplay'],['HTMLElement', 'oncanplaythrough'],['HTMLElement', 'onchange'],['HTMLElement', 'onclick'],['HTMLElement', 'onclose'],['HTMLElement', 'oncontextmenu'],['HTMLElement', 'oncuechange'],['HTMLElement', 'ondblclick'],['HTMLElement', 'ondrag'],['HTMLElement', 'ondragend'],['HTMLElement', 'ondragenter'],['HTMLElement', 'ondragleave'],['HTMLElement', 'ondragover'],['HTMLElement', 'ondragstart'],['HTMLElement', 'ondrop'],['HTMLElement', 'ondurationchange'],['HTMLElement', 'onemptied'],['HTMLElement', 'onended'],['HTMLElement', 'onerror'],['HTMLElement', 'onfocus'],['HTMLElement', 'onformdata'],['HTMLElement', 'oninput'],['HTMLElement', 'oninvalid'],['HTMLElement', 'onkeydown'],['HTMLElement', 'onkeypress'],['HTMLElement', 'onkeyup'],['HTMLElement', 'onload'],['HTMLElement', 'onloadeddata'],['HTMLElement', 'onloadedmetadata'],['HTMLElement', 'onloadstart'],['HTMLElement', 'onmousedown'],['HTMLElement', 'onmouseenter'],['HTMLElement', 'onmouseleave'],['HTMLElement', 'onmousemove'],['HTMLElement', 'onmouseout'],['HTMLElement', 'onmouseover'],['HTMLElement', 'onmouseup'],['HTMLElement', 'onmousewheel'],['HTMLElement', 'onpause'],['HTMLElement', 'onplay'],['HTMLElement', 'onplaying'],['HTMLElement', 'onprogress'],['HTMLElement', 'onratechange'],['HTMLElement', 'onreset'],['HTMLElement', 'onresize'],['HTMLElement', 'onscroll'],['HTMLElement', 'onseeked'],['HTMLElement', 'onseeking'],['HTMLElement', 'onselect'],['HTMLElement', 'onstalled'],['HTMLElement', 'onsubmit'],['HTMLElement', 'onsuspend'],['HTMLElement', 'ontimeupdate'],['HTMLElement', 'ontoggle'],['HTMLElement', 'onvolumechange'],['HTMLElement', 'onwaiting'],['HTMLElement', 'onwebkitanimationend'],['HTMLElement', 'onwebkitanimationiteration'],['HTMLElement', 'onwebkitanimationstart'],['HTMLElement', 'onwebkittransitionend'],['HTMLElement', 'onwheel'],['HTMLElement', 'onauxclick'],['HTMLElement', 'ongotpointercapture'],['HTMLElement', 'onlostpointercapture'],['HTMLElement', 'onpointerdown'],['HTMLElement', 'onpointermove'],['HTMLElement', 'onpointerup'],['HTMLElement', 'onpointercancel'],['HTMLElement', 'onpointerover'],['HTMLElement', 'onpointerout'],['HTMLElement', 'onpointerenter'],['HTMLElement', 'onpointerleave'],['HTMLElement', 'onselectstart'],['HTMLElement', 'onselectionchange'],['HTMLElement', 'onanimationend'],['HTMLElement', 'onanimationiteration'],['HTMLElement', 'onanimationstart'],['HTMLElement', 'ontransitionrun'],['HTMLElement', 'ontransitionstart'],['HTMLElement', 'ontransitionend'],['HTMLElement', 'ontransitioncancel'],['HTMLElement', 'oncopy'],['HTMLElement', 'oncut'],['HTMLElement', 'onpaste'],['HTMLElement', 'dataset'],['HTMLElement', 'nonce'],['HTMLElement', 'autofocus'],['HTMLElement', 'tabIndex'],['HTMLElement', 'enterKeyHint'],['HTMLElement', 'virtualKeyboardPolicy'],['HTMLElement', 'onpointerrawupdate'],['HTMLDivElement', 'align'],['HTMLDirectoryElement', 'compact'],['HTMLDialogElement', 'open'],['HTMLDialogElement', 'returnValue'],['HTMLDetailsElement', 'open'],['HTMLDataListElement', 'options'],['HTMLDataElement', 'value'],['HTMLDListElement', 'compact'],['HTMLCollection', 'length'],['HTMLCanvasElement', 'width'],['HTMLCanvasElement', 'height'],['HTMLButtonElement', 'disabled'],['HTMLButtonElement', 'form'],['HTMLButtonElement', 'formAction'],['HTMLButtonElement', 'formEnctype'],['HTMLButtonElement', 'formMethod'],['HTMLButtonElement', 'formNoValidate'],['HTMLButtonElement', 'formTarget'],['HTMLButtonElement', 'name'],['HTMLButtonElement', 'type'],['HTMLButtonElement', 'value'],['HTMLButtonElement', 'willValidate'],['HTMLButtonElement', 'validity'],['HTMLButtonElement', 'validationMessage'],['HTMLButtonElement', 'labels'],['HTMLBodyElement', 'text'],['HTMLBodyElement', 'link'],['HTMLBodyElement', 'vLink'],['HTMLBodyElement', 'aLink'],['HTMLBodyElement', 'bgColor'],['HTMLBodyElement', 'background'],['HTMLBodyElement', 'onblur'],['HTMLBodyElement', 'onerror'],['HTMLBodyElement', 'onfocus'],['HTMLBodyElement', 'onload'],['HTMLBodyElement', 'onresize'],['HTMLBodyElement', 'onscroll'],['HTMLBodyElement', 'onafterprint'],['HTMLBodyElement', 'onbeforeprint'],['HTMLBodyElement', 'onbeforeunload'],['HTMLBodyElement', 'onhashchange'],['HTMLBodyElement', 'onlanguagechange'],['HTMLBodyElement', 'onmessage'],['HTMLBodyElement', 'onmessageerror'],['HTMLBodyElement', 'onoffline'],['HTMLBodyElement', 'ononline'],['HTMLBodyElement', 'onpagehide'],['HTMLBodyElement', 'onpageshow'],['HTMLBodyElement', 'onpopstate'],['HTMLBodyElement', 'onrejectionhandled'],['HTMLBodyElement', 'onstorage'],['HTMLBodyElement', 'onunhandledrejection'],['HTMLBodyElement', 'onunload'],['HTMLBaseElement', 'href'],['HTMLBaseElement', 'target'],['HTMLBRElement', 'clear'],['HTMLAreaElement', 'alt'],['HTMLAreaElement', 'coords'],['HTMLAreaElement', 'download'],['HTMLAreaElement', 'shape'],['HTMLAreaElement', 'target'],['HTMLAreaElement', 'ping'],['HTMLAreaElement', 'rel'],['HTMLAreaElement', 'relList'],['HTMLAreaElement', 'referrerPolicy'],['HTMLAreaElement', 'noHref'],['HTMLAreaElement', 'origin'],['HTMLAreaElement', 'protocol'],['HTMLAreaElement', 'username'],['HTMLAreaElement', 'password'],['HTMLAreaElement', 'host'],['HTMLAreaElement', 'hostname'],['HTMLAreaElement', 'port'],['HTMLAreaElement', 'pathname'],['HTMLAreaElement', 'search'],['HTMLAreaElement', 'hash'],['HTMLAreaElement', 'href'],
    ['HTMLAllCollection', 'length'],['GeolocationPositionError', 'code'],['GeolocationPositionError', 'message'],['GeolocationPosition', 'coords'],['GeolocationPosition', 'timestamp'],['GeolocationCoordinates', 'latitude'],['GeolocationCoordinates', 'longitude'],['GeolocationCoordinates', 'altitude'],['GeolocationCoordinates', 'accuracy'],['GeolocationCoordinates', 'altitudeAccuracy'],['GeolocationCoordinates', 'heading'],['GeolocationCoordinates', 'speed'],['GamepadHapticActuator', 'type'],['GamepadEvent', 'gamepad'],['GamepadButton', 'pressed'],['GamepadButton', 'touched'],['GamepadButton', 'value'],['Gamepad', 'id'],['Gamepad', 'index'],['Gamepad', 'connected'],['Gamepad', 'timestamp'],['Gamepad', 'mapping'],['Gamepad', 'axes'],['Gamepad', 'buttons'],['Gamepad', 'vibrationActuator'],['GainNode', 'gain'],['FormDataEvent', 'formData'],['FontFaceSetLoadEvent', 'fontfaces'],['FontFace', 'family'],['FontFace', 'style'],['FontFace', 'weight'],['FontFace', 'stretch'],['FontFace', 'unicodeRange'],['FontFace', 'variant'],['FontFace', 'featureSettings'],['FontFace', 'display'],['FontFace', 'ascentOverride'],['FontFace', 'descentOverride'],['FontFace', 'lineGapOverride'],['FontFace', 'status'],['FontFace', 'loaded'],['FontFace', 'sizeAdjust'],['FocusEvent', 'relatedTarget'],['FileReader', 'readyState'],['FileReader', 'result'],['FileReader', 'error'],['FileReader', 'onloadstart'],['FileReader', 'onprogress'],['FileReader', 'onload'],['FileReader', 'onabort'],['FileReader', 'onerror'],['FileReader', 'onloadend'],['FileList', 'length'],['File', 'name'],['File', 'lastModified'],['File', 'lastModifiedDate'],['File', 'webkitRelativePath'],['EventSource', 'url'],['EventSource', 'withCredentials'],['EventSource', 'readyState'],['EventSource', 'onopen'],['EventSource', 'onmessage'],['EventSource', 'onerror'],['EventCounts', 'size'],['Event', 'type'],['Event', 'target'],['Event', 'currentTarget'],['Event', 'eventPhase'],['Event', 'bubbles'],['Event', 'cancelable'],['Event', 'defaultPrevented'],['Event', 'composed'],['Event', 'timeStamp'],['Event', 'srcElement'],['Event', 'returnValue'],['Event', 'cancelBubble'],['Event', 'path'],['ErrorEvent', 'message'],['ErrorEvent', 'filename'],['ErrorEvent', 'lineno'],['ErrorEvent', 'colno'],['ErrorEvent', 'error'],['ElementInternals', 'form'],['ElementInternals', 'willValidate'],['ElementInternals', 'validity'],['ElementInternals', 'validationMessage'],['ElementInternals', 'labels'],['ElementInternals', 'shadowRoot'],['ElementInternals', 'states'],['ElementInternals', 'ariaAtomic'],['ElementInternals', 'ariaAutoComplete'],['ElementInternals', 'ariaBusy'],['ElementInternals', 'ariaChecked'],['ElementInternals', 'ariaColCount'],['ElementInternals', 'ariaColIndex'],['ElementInternals', 'ariaColSpan'],['ElementInternals', 'ariaCurrent'],['ElementInternals', 'ariaDescription'],['ElementInternals', 'ariaDisabled'],['ElementInternals', 'ariaExpanded'],['ElementInternals', 'ariaHasPopup'],['ElementInternals', 'ariaHidden'],['ElementInternals', 'ariaKeyShortcuts'],['ElementInternals', 'ariaLabel'],['ElementInternals', 'ariaLevel'],['ElementInternals', 'ariaLive'],['ElementInternals', 'ariaModal'],['ElementInternals', 'ariaMultiLine'],['ElementInternals', 'ariaMultiSelectable'],['ElementInternals', 'ariaOrientation'],['ElementInternals', 'ariaPlaceholder'],['ElementInternals', 'ariaPosInSet'],['ElementInternals', 'ariaPressed'],['ElementInternals', 'ariaReadOnly'],['ElementInternals', 'ariaRelevant'],['ElementInternals', 'ariaRequired'],['ElementInternals', 'ariaRoleDescription'],['ElementInternals', 'ariaRowCount'],['ElementInternals', 'ariaRowIndex'],['ElementInternals', 'ariaRowSpan'],['ElementInternals', 'ariaSelected'],['ElementInternals', 'ariaSetSize'],['ElementInternals', 'ariaSort'],['ElementInternals', 'ariaValueMax'],['ElementInternals', 'ariaValueMin'],['ElementInternals', 'ariaValueNow'],['ElementInternals', 'ariaValueText'],
    ['Element', 'namespaceURI'],['Element', 'prefix'],['Element', 'localName'],['Element', 'tagName'],['Element', 'id'],['Element', 'className'],['Element', 'classList'],['Element', 'slot'],['Element', 'attributes'],['Element', 'shadowRoot'],['Element', 'part'],['Element', 'assignedSlot'],['Element', 'innerHTML'],['Element', 'outerHTML'],['Element', 'scrollTop'],['Element', 'scrollLeft'],['Element', 'scrollWidth'],['Element', 'scrollHeight'],['Element', 'clientTop'],['Element', 'clientLeft'],['Element', 'clientWidth'],['Element', 'clientHeight'],['Element', 'attributeStyleMap'],['Element', 'onbeforecopy'],['Element', 'onbeforecut'],['Element', 'onbeforepaste'],['Element', 'onsearch'],['Element', 'elementTiming'],['Element', 'onfullscreenchange'],['Element', 'onfullscreenerror'],['Element', 'onwebkitfullscreenchange'],['Element', 'onwebkitfullscreenerror'],['Element', 'children'],['Element', 'firstElementChild'],['Element', 'lastElementChild'],['Element', 'childElementCount'],['Element', 'previousElementSibling'],['Element', 'nextElementSibling'],['Element', 'ariaAtomic'],['Element', 'ariaAutoComplete'],['Element', 'ariaBusy'],['Element', 'ariaChecked'],['Element', 'ariaColCount'],['Element', 'ariaColIndex'],['Element', 'ariaColSpan'],['Element', 'ariaCurrent'],['Element', 'ariaDescription'],['Element', 'ariaDisabled'],['Element', 'ariaExpanded'],['Element', 'ariaHasPopup'],['Element', 'ariaHidden'],['Element', 'ariaKeyShortcuts'],['Element', 'ariaLabel'],['Element', 'ariaLevel'],['Element', 'ariaLive'],['Element', 'ariaModal'],['Element', 'ariaMultiLine'],['Element', 'ariaMultiSelectable'],['Element', 'ariaOrientation'],['Element', 'ariaPlaceholder'],['Element', 'ariaPosInSet'],['Element', 'ariaPressed'],['Element', 'ariaReadOnly'],['Element', 'ariaRelevant'],['Element', 'ariaRequired'],['Element', 'ariaRoleDescription'],['Element', 'ariaRowCount'],['Element', 'ariaRowIndex'],['Element', 'ariaRowSpan'],['Element', 'ariaSelected'],['Element', 'ariaSetSize'],['Element', 'ariaSort'],['Element', 'ariaValueMax'],['Element', 'ariaValueMin'],['Element', 'ariaValueNow'],['Element', 'ariaValueText'],
    ['DynamicsCompressorNode', 'threshold'],['DynamicsCompressorNode', 'knee'],['DynamicsCompressorNode', 'ratio'],['DynamicsCompressorNode', 'reduction'],['DynamicsCompressorNode', 'attack'],['DynamicsCompressorNode', 'release'],['DragEvent', 'dataTransfer'],['DocumentType', 'name'],['DocumentType', 'publicId'],['DocumentType', 'systemId'],['DocumentFragment', 'children'],['DocumentFragment', 'firstElementChild'],['DocumentFragment', 'lastElementChild'],['DocumentFragment', 'childElementCount'],
    ['Document', 'onpointerrawupdate'],['DelayNode', 'delayTime'],['DecompressionStream', 'readable'],['DecompressionStream', 'writable'],['DataTransferItemList', 'length'],['DataTransferItem', 'kind'],['DataTransferItem', 'type'],['DataTransfer', 'dropEffect'],['DataTransfer', 'effectAllowed'],['DataTransfer', 'items'],['DataTransfer', 'types'],['DataTransfer', 'files'],['DOMTokenList', 'length'],['DOMTokenList', 'value'],['DOMStringList', 'length'],['DOMRectReadOnly', 'x'],['DOMRectReadOnly', 'y'],['DOMRectReadOnly', 'width'],['DOMRectReadOnly', 'height'],['DOMRectReadOnly', 'top'],['DOMRectReadOnly', 'right'],['DOMRectReadOnly', 'bottom'],['DOMRectReadOnly', 'left'],['DOMRectList', 'length'],['DOMRect', 'x'],['DOMRect', 'y'],['DOMRect', 'width'],['DOMRect', 'height'],['DOMQuad', 'p1'],['DOMQuad', 'p2'],['DOMQuad', 'p3'],['DOMQuad', 'p4'],['DOMPointReadOnly', 'x'],['DOMPointReadOnly', 'y'],['DOMPointReadOnly', 'z'],['DOMPointReadOnly', 'w'],['DOMPoint', 'x'],['DOMPoint', 'y'],['DOMPoint', 'z'],['DOMPoint', 'w'],['DOMMatrixReadOnly', 'a'],['DOMMatrixReadOnly', 'b'],['DOMMatrixReadOnly', 'c'],['DOMMatrixReadOnly', 'd'],['DOMMatrixReadOnly', 'e'],['DOMMatrixReadOnly', 'f'],['DOMMatrixReadOnly', 'm11'],['DOMMatrixReadOnly', 'm12'],['DOMMatrixReadOnly', 'm13'],['DOMMatrixReadOnly', 'm14'],['DOMMatrixReadOnly', 'm21'],['DOMMatrixReadOnly', 'm22'],['DOMMatrixReadOnly', 'm23'],['DOMMatrixReadOnly', 'm24'],['DOMMatrixReadOnly', 'm31'],['DOMMatrixReadOnly', 'm32'],['DOMMatrixReadOnly', 'm33'],['DOMMatrixReadOnly', 'm34'],['DOMMatrixReadOnly', 'm41'],['DOMMatrixReadOnly', 'm42'],['DOMMatrixReadOnly', 'm43'],['DOMMatrixReadOnly', 'm44'],['DOMMatrixReadOnly', 'is2D'],['DOMMatrixReadOnly', 'isIdentity'],['DOMException', 'code'],['DOMException', 'name'],['DOMException', 'message'],['DOMError', 'name'],['DOMError', 'message'],['CustomEvent', 'detail'],['CountQueuingStrategy', 'highWaterMark'],['CountQueuingStrategy', 'size'],['ConvolverNode', 'buffer'],['ConvolverNode', 'normalize'],['ConstantSourceNode', 'offset'],['CompressionStream', 'readable'],['CompressionStream', 'writable'],['CompositionEvent', 'data'],['CloseEvent', 'wasClean'],['CloseEvent', 'code'],['CloseEvent', 'reason'],['ClipboardEvent', 'clipboardData'],['CharacterData', 'data'],['CharacterData', 'length'],['CharacterData', 'previousElementSibling'],['CharacterData', 'nextElementSibling'],['CanvasRenderingContext2D', 'canvas'],['CanvasRenderingContext2D', 'globalAlpha'],['CanvasRenderingContext2D', 'globalCompositeOperation'],['CanvasRenderingContext2D', 'filter'],['CanvasRenderingContext2D', 'imageSmoothingEnabled'],['CanvasRenderingContext2D', 'imageSmoothingQuality'],['CanvasRenderingContext2D', 'strokeStyle'],['CanvasRenderingContext2D', 'fillStyle'],['CanvasRenderingContext2D', 'shadowOffsetX'],['CanvasRenderingContext2D', 'shadowOffsetY'],['CanvasRenderingContext2D', 'shadowBlur'],['CanvasRenderingContext2D', 'shadowColor'],['CanvasRenderingContext2D', 'lineWidth'],['CanvasRenderingContext2D', 'lineCap'],['CanvasRenderingContext2D', 'lineJoin'],['CanvasRenderingContext2D', 'miterLimit'],['CanvasRenderingContext2D', 'lineDashOffset'],['CanvasRenderingContext2D', 'font'],['CanvasRenderingContext2D', 'textAlign'],['CanvasRenderingContext2D', 'textBaseline'],['CanvasRenderingContext2D', 'direction'],['CanvasCaptureMediaStreamTrack', 'canvas'],['CSSVariableReferenceValue', 'variable'],['CSSVariableReferenceValue', 'fallback'],['CSSTransformComponent', 'is2D'],['CSSStyleSheet', 'ownerRule'],['CSSStyleSheet', 'cssRules'],['CSSStyleSheet', 'rules'],['CSSStyleRule', 'selectorText'],['CSSStyleRule', 'style'],['CSSStyleRule', 'styleMap'],['CSSStyleDeclaration', 'cssText'],['CSSStyleDeclaration', 'length'],['CSSStyleDeclaration', 'parentRule'],['CSSStyleDeclaration', 'cssFloat'],['CSSRuleList', 'length'],['CSSRule', 'type'],['CSSRule', 'cssText'],['CSSRule', 'parentRule'],['CSSRule', 'parentStyleSheet'],['CSSPropertyRule', 'name'],['CSSPropertyRule', 'syntax'],['CSSPropertyRule', 'inherits'],['CSSPropertyRule', 'initialValue'],['CSSPageRule', 'selectorText'],['CSSPageRule', 'style'],['CSSNumericArray', 'length'],['CSSNamespaceRule', 'namespaceURI'],['CSSNamespaceRule', 'prefix'],['CSSMediaRule', 'media'],['CSSKeyframesRule', 'name'],['CSSKeyframesRule', 'cssRules'],['CSSKeyframeRule', 'keyText'],['CSSKeyframeRule', 'style'],['CSSImportRule', 'href'],['CSSImportRule', 'media'],['CSSImportRule', 'styleSheet'],['CSSGroupingRule', 'cssRules'],['CSSFontFaceRule', 'style'],['CSSCounterStyleRule', 'name'],['CSSCounterStyleRule', 'system'],['CSSCounterStyleRule', 'symbols'],['CSSCounterStyleRule', 'additiveSymbols'],['CSSCounterStyleRule', 'negative'],['CSSCounterStyleRule', 'prefix'],['CSSCounterStyleRule', 'suffix'],['CSSCounterStyleRule', 'range'],['CSSCounterStyleRule', 'pad'],['CSSCounterStyleRule', 'speakAs'],['CSSCounterStyleRule', 'fallback'],['CSSConditionRule', 'conditionText'],['ByteLengthQueuingStrategy', 'highWaterMark'],['ByteLengthQueuingStrategy', 'size'],['BroadcastChannel', 'name'],['BroadcastChannel', 'onmessage'],['BroadcastChannel', 'onmessageerror'],['BlobEvent', 'data'],['BlobEvent', 'timecode'],['Blob', 'size'],['Blob', 'type'],['BiquadFilterNode', 'type'],['BiquadFilterNode', 'frequency'],['BiquadFilterNode', 'detune'],['BiquadFilterNode', 'Q'],['BiquadFilterNode', 'gain'],['BeforeUnloadEvent', 'returnValue'],['BeforeInstallPromptEvent', 'platforms'],['BeforeInstallPromptEvent', 'userChoice'],['BatteryManager', 'charging'],['BatteryManager', 'chargingTime'],['BatteryManager', 'dischargingTime'],['BatteryManager', 'level'],['BatteryManager', 'onchargingchange'],['BatteryManager', 'onchargingtimechange'],['BatteryManager', 'ondischargingtimechange'],['BatteryManager', 'onlevelchange'],['BaseAudioContext', 'destination'],['BaseAudioContext', 'currentTime'],['BaseAudioContext', 'sampleRate'],['BaseAudioContext', 'listener'],['BaseAudioContext', 'state'],['BaseAudioContext', 'onstatechange'],['BarProp', 'visible'],['AudioWorkletNode', 'parameters'],['AudioWorkletNode', 'port'],['AudioWorkletNode', 'onprocessorerror'],['AudioScheduledSourceNode', 'onended'],['AudioProcessingEvent', 'playbackTime'],['AudioProcessingEvent', 'inputBuffer'],['AudioProcessingEvent', 'outputBuffer'],['AudioParamMap', 'size'],['AudioParam', 'value'],['AudioParam', 'automationRate'],['AudioParam', 'defaultValue'],['AudioParam', 'minValue'],['AudioParam', 'maxValue'],['AudioNode', 'context'],['AudioNode', 'numberOfInputs'],['AudioNode', 'numberOfOutputs'],['AudioNode', 'channelCount'],['AudioNode', 'channelCountMode'],['AudioNode', 'channelInterpretation'],['AudioListener', 'positionX'],['AudioListener', 'positionY'],['AudioListener', 'positionZ'],['AudioListener', 'forwardX'],['AudioListener', 'forwardY'],['AudioListener', 'forwardZ'],['AudioListener', 'upX'],['AudioListener', 'upY'],['AudioListener', 'upZ'],['AudioDestinationNode', 'maxChannelCount'],['AudioContext', 'baseLatency'],['AudioBufferSourceNode', 'buffer'],['AudioBufferSourceNode', 'playbackRate'],['AudioBufferSourceNode', 'detune'],['AudioBufferSourceNode', 'loop'],['AudioBufferSourceNode', 'loopStart'],['AudioBufferSourceNode', 'loopEnd'],['AudioBuffer', 'length'],['AudioBuffer', 'duration'],['AudioBuffer', 'sampleRate'],['AudioBuffer', 'numberOfChannels'],['Attr', 'namespaceURI'],['Attr', 'prefix'],['Attr', 'localName'],['Attr', 'name'],['Attr', 'value'],['Attr', 'ownerElement'],['Attr', 'specified'],['AnimationEvent', 'animationName'],['AnimationEvent', 'elapsedTime'],['AnimationEvent', 'pseudoElement'],['Animation', 'effect'],['Animation', 'startTime'],['Animation', 'currentTime'],['Animation', 'playbackRate'],['Animation', 'playState'],['Animation', 'pending'],['Animation', 'id'],['Animation', 'onfinish'],['Animation', 'oncancel'],['Animation', 'timeline'],['Animation', 'replaceState'],['Animation', 'onremove'],['Animation', 'finished'],['Animation', 'ready'],['AnalyserNode', 'fftSize'],['AnalyserNode', 'frequencyBinCount'],['AnalyserNode', 'minDecibels'],['AnalyserNode', 'maxDecibels'],['AnalyserNode', 'smoothingTimeConstant'],['AbstractRange', 'startContainer'],['AbstractRange', 'startOffset'],['AbstractRange', 'endContainer'],['AbstractRange', 'endOffset'],['AbstractRange', 'collapsed'],['AbortSignal', 'aborted'],['AbortSignal', 'onabort'],['AbortController', 'signal'],['AudioData', 'format'],['AudioData', 'sampleRate'],['AudioData', 'numberOfFrames'],['AudioData', 'numberOfChannels'],['AudioData', 'duration'],['AudioData', 'timestamp'],['EncodedAudioChunk', 'type'],['EncodedAudioChunk', 'timestamp'],['EncodedAudioChunk', 'byteLength'],['EncodedAudioChunk', 'duration'],['EncodedVideoChunk', 'type'],['EncodedVideoChunk', 'timestamp'],['EncodedVideoChunk', 'duration'],['EncodedVideoChunk', 'byteLength'],['ImageTrack', 'frameCount'],['ImageTrack', 'animated'],['ImageTrack', 'repetitionCount'],['ImageTrack', 'selected'],['ImageTrackList', 'length'],['ImageTrackList', 'selectedIndex'],['ImageTrackList', 'selectedTrack'],['ImageTrackList', 'ready'],['VideoColorSpace', 'primaries'],['VideoColorSpace', 'transfer'],['VideoColorSpace', 'matrix'],['VideoColorSpace', 'fullRange'],['VideoFrame', 'format'],['VideoFrame', 'timestamp'],['VideoFrame', 'duration'],['VideoFrame', 'codedWidth'],['VideoFrame', 'codedHeight'],['VideoFrame', 'codedRect'],['VideoFrame', 'visibleRect'],['VideoFrame', 'displayWidth'],['VideoFrame', 'displayHeight'],['VideoFrame', 'colorSpace'],['MediaStreamTrackGenerator', 'writable'],['MediaStreamTrackProcessor', 'readable'],['Profiler', 'sampleInterval'],['Profiler', 'stopped'],['AnimationPlaybackEvent', 'currentTime'],['AnimationPlaybackEvent', 'timelineTime'],['AnimationTimeline', 'currentTime'],['CSSAnimation', 'animationName'],['CSSTransition', 'transitionProperty'],['BackgroundFetchRecord', 'request'],['BackgroundFetchRecord', 'responseReady'],['BackgroundFetchRegistration', 'id'],['BackgroundFetchRegistration', 'uploadTotal'],['BackgroundFetchRegistration', 'uploaded'],['BackgroundFetchRegistration', 'downloadTotal'],['BackgroundFetchRegistration', 'downloaded'],['BackgroundFetchRegistration', 'result'],['BackgroundFetchRegistration', 'failureReason'],['BackgroundFetchRegistration', 'recordsAvailable'],['BackgroundFetchRegistration', 'onprogress'],['CustomStateSet', 'size'],['DelegatedInkTrailPresenter', 'presentationArea'],['DelegatedInkTrailPresenter', 'expectedImprovement'],['MediaMetadata', 'title'],['MediaMetadata', 'artist'],['MediaMetadata', 'album'],['MediaMetadata', 'artwork'],['MediaSession', 'metadata'],['MediaSession', 'playbackState'],['MediaSource', 'sourceBuffers'],['MediaSource', 'activeSourceBuffers'],['MediaSource', 'duration'],['MediaSource', 'onsourceopen'],['MediaSource', 'onsourceended'],['MediaSource', 'onsourceclose'],['MediaSource', 'readyState'],['SourceBuffer', 'mode'],['SourceBuffer', 'updating'],['SourceBuffer', 'buffered'],['SourceBuffer', 'timestampOffset'],['SourceBuffer', 'appendWindowStart'],['SourceBuffer', 'appendWindowEnd'],['SourceBuffer', 'onupdatestart'],['SourceBuffer', 'onupdate'],['SourceBuffer', 'onupdateend'],['SourceBuffer', 'onerror'],['SourceBuffer', 'onabort'],['SourceBufferList', 'length'],['SourceBufferList', 'onaddsourcebuffer'],['SourceBufferList', 'onremovesourcebuffer'],['NavigatorUAData', 'brands'],['NavigatorUAData', 'mobile'],['NavigatorUAData', 'platform'],['Notification', 'onclick'],['Notification', 'onshow'],['Notification', 'onerror'],['Notification', 'onclose'],['Notification', 'title'],['Notification', 'dir'],['Notification', 'lang'],['Notification', 'body'],['Notification', 'tag'],['Notification', 'icon'],['Notification', 'badge'],['Notification', 'vibrate'],['Notification', 'timestamp'],['Notification', 'renotify'],['Notification', 'silent'],['Notification', 'requireInteraction'],['Notification', 'data'],['Notification', 'actions'],['Notification', 'image'],['PaymentManager', 'instruments'],['PaymentManager', 'userHint'],['PermissionStatus', 'state'],['PermissionStatus', 'onchange'],['PictureInPictureEvent', 'pictureInPictureWindow'],['PictureInPictureWindow', 'width'],['PictureInPictureWindow', 'height'],['PictureInPictureWindow', 'onresize'],['PushSubscription', 'endpoint'],['PushSubscription', 'expirationTime'],['PushSubscription', 'options'],['PushSubscriptionOptions', 'userVisibleOnly'],['PushSubscriptionOptions', 'applicationServerKey'],['RemotePlayback', 'state'],['RemotePlayback', 'onconnecting'],['RemotePlayback', 'onconnect'],['RemotePlayback', 'ondisconnect'],['TaskPriorityChangeEvent', 'previousPriority'],['TaskSignal', 'priority'],['TaskSignal', 'onprioritychange'],['SharedWorker', 'port'],['SharedWorker', 'onerror'],['SpeechSynthesisErrorEvent', 'error'],['SpeechSynthesisEvent', 'utterance'],['SpeechSynthesisEvent', 'charIndex'],['SpeechSynthesisEvent', 'charLength'],['SpeechSynthesisEvent', 'elapsedTime'],['SpeechSynthesisEvent', 'name'],['SpeechSynthesisUtterance', 'text'],['SpeechSynthesisUtterance', 'lang'],['SpeechSynthesisUtterance', 'voice'],['SpeechSynthesisUtterance', 'volume'],['SpeechSynthesisUtterance', 'rate'],['SpeechSynthesisUtterance', 'pitch'],['SpeechSynthesisUtterance', 'onstart'],['SpeechSynthesisUtterance', 'onend'],['SpeechSynthesisUtterance', 'onerror'],['SpeechSynthesisUtterance', 'onpause'],['SpeechSynthesisUtterance', 'onresume'],['SpeechSynthesisUtterance', 'onmark'],['SpeechSynthesisUtterance', 'onboundary'],['TrustedTypePolicy', 'name'],['TrustedTypePolicyFactory', 'emptyHTML'],['TrustedTypePolicyFactory', 'emptyScript'],['TrustedTypePolicyFactory', 'defaultPolicy'],['VideoPlaybackQuality', 'creationTime'],['VideoPlaybackQuality', 'totalVideoFrames'],['VideoPlaybackQuality', 'droppedVideoFrames'],['VideoPlaybackQuality', 'corruptedVideoFrames'],['webkitSpeechGrammar', 'src'],['webkitSpeechGrammar', 'weight'],['webkitSpeechGrammarList', 'length'],['webkitSpeechRecognition', 'grammars'],['webkitSpeechRecognition', 'lang'],['webkitSpeechRecognition', 'continuous'],['webkitSpeechRecognition', 'interimResults'],['webkitSpeechRecognition', 'maxAlternatives'],['webkitSpeechRecognition', 'onaudiostart'],['webkitSpeechRecognition', 'onsoundstart'],['webkitSpeechRecognition', 'onspeechstart'],['webkitSpeechRecognition', 'onspeechend'],['webkitSpeechRecognition', 'onsoundend'],['webkitSpeechRecognition', 'onaudioend'],['webkitSpeechRecognition', 'onresult'],['webkitSpeechRecognition', 'onnomatch'],['webkitSpeechRecognition', 'onerror'],['webkitSpeechRecognition', 'onstart'],['webkitSpeechRecognition', 'onend'],['webkitSpeechRecognitionError', 'error'],['webkitSpeechRecognitionError', 'message'],['webkitSpeechRecognitionEvent', 'resultIndex'],['webkitSpeechRecognitionEvent', 'results']]

var funcs_1 = [
    ['Document', 'adoptNode'],
    ['Document', 'append'],
    ['Document', 'captureEvents'],
    ['Document', 'caretRangeFromPoint'],
    ['Document', 'clear'],
    ['Document', 'close'],
    ['Document', 'elementFromPoint'],
    ['Document', 'elementsFromPoint'],
    ['Document', 'evaluate'],
    ['Document', 'execCommand'],
    ['Document', 'exitFullscreen'],
    ['Document', 'exitPointerLock'],
    ['Document', 'getSelection'],
    ['Document', 'hasFocus'],
    ['Document', 'importNode'],
    ['Document', 'open'],
    ['Document', 'prepend'],
    ['Document', 'queryCommandEnabled'],
    ['Document', 'queryCommandIndeterm'],
    ['Document', 'queryCommandState'],
    ['Document', 'queryCommandSupported'],
    ['Document', 'queryCommandValue'],
    ['Document', 'releaseEvents'],
    ['Document', 'replaceChildren'],
    ['Document', 'webkitCancelFullScreen'],
    ['Document', 'webkitExitFullscreen'],
    ['Document', 'write'],
    ['Document', 'writeln'],
    ['Document', 'exitPictureInPicture'],
    ['Document', 'getAnimations'],
    ['Element', 'after'],
    ['Element', 'animate'],
    ['Element', 'append'],
    ['Element', 'attachShadow'],
    ['Element', 'before'],
    ['Element', 'closest'],
    ['Element', 'computedStyleMap'],
    ['Element', 'hasAttribute'],
    ['Element', 'hasAttributeNS'],
    ['Element', 'hasAttributes'],
    ['Element', 'hasPointerCapture'],
    ['Element', 'insertAdjacentElement'],
    ['Element', 'insertAdjacentHTML'],
    ['Element', 'insertAdjacentText'],
    ['Element', 'matches'],
    ['Element', 'prepend'],
    ['Element', 'releasePointerCapture'],
    ['Element', 'remove'],
    ['Element', 'removeAttribute'],
    ['Element', 'removeAttributeNS'],
    ['Element', 'removeAttributeNode'],
    ['Element', 'replaceChildren'],
    ['Element', 'replaceWith'],
    ['Element', 'requestFullscreen'],
    ['Element', 'requestPointerLock'],
    ['Element', 'scroll'],
    ['Element', 'scrollBy'],
    ['Element', 'scrollIntoView'],
    ['Element', 'scrollIntoViewIfNeeded'],
    ['Element', 'scrollTo'],
    ['Element', 'setPointerCapture'],
    ['Element', 'toggleAttribute'],
    ['Element', 'webkitMatchesSelector'],
    ['Element', 'webkitRequestFullScreen'],
    ['Element', 'webkitRequestFullscreen'],
    ['Element', 'getAnimations'],
    ['Element', 'getInnerHTML'],
    ['FinalizationRegistry', 'register'],['FinalizationRegistry', 'unregister'],['WeakRef', 'deref'],
    ['Image', 'decode'],['webkitURL', 'toJSON'],['webkitURL', 'toString'],['webkitRTCPeerConnection', 'addIceCandidate'],['webkitRTCPeerConnection', 'addStream'],['webkitRTCPeerConnection', 'addTrack'],['webkitRTCPeerConnection', 'addTransceiver'],['webkitRTCPeerConnection', 'close'],['webkitRTCPeerConnection', 'createAnswer'],['webkitRTCPeerConnection', 'createDTMFSender'],['webkitRTCPeerConnection', 'createDataChannel'],['webkitRTCPeerConnection', 'createOffer'],['webkitRTCPeerConnection', 'getConfiguration'],['webkitRTCPeerConnection', 'getLocalStreams'],['webkitRTCPeerConnection', 'getReceivers'],['webkitRTCPeerConnection', 'getRemoteStreams'],['webkitRTCPeerConnection', 'getSenders'],['webkitRTCPeerConnection', 'getStats'],['webkitRTCPeerConnection', 'getTransceivers'],['webkitRTCPeerConnection', 'removeStream'],['webkitRTCPeerConnection', 'removeTrack'],['webkitRTCPeerConnection', 'restartIce'],['webkitRTCPeerConnection', 'setConfiguration'],['webkitRTCPeerConnection', 'setLocalDescription'],['webkitRTCPeerConnection', 'setRemoteDescription'],['webkitMediaStream', 'addTrack'],['webkitMediaStream', 'clone'],['webkitMediaStream', 'getAudioTracks'],['webkitMediaStream', 'getTrackById'],['webkitMediaStream', 'getTracks'],['webkitMediaStream', 'getVideoTracks'],['webkitMediaStream', 'removeTrack'],['WebKitMutationObserver', 'disconnect'],['WebKitMutationObserver', 'observe'],['WebKitMutationObserver', 'takeRecords'],['XPathResult', 'iterateNext'],['XPathResult', 'snapshotItem'],['XPathExpression', 'evaluate'],['XPathEvaluator', 'createExpression'],['XPathEvaluator', 'createNSResolver'],['XPathEvaluator', 'evaluate'],['XMLSerializer', 'serializeToString'],
    ['WritableStreamDefaultWriter', 'abort'],['WritableStreamDefaultWriter', 'close'],['WritableStreamDefaultWriter', 'releaseLock'],['WritableStreamDefaultWriter', 'write'],['WritableStreamDefaultController', 'error'],['WritableStream', 'abort'],['WritableStream', 'close'],['WritableStream', 'getWriter'],['Worker', 'postMessage'],['Worker', 'terminate'],
    ['WebGLRenderingContext', 'activeTexture'],['WebGLRenderingContext', 'attachShader'],['WebGLRenderingContext', 'bindAttribLocation'],['WebGLRenderingContext', 'bindRenderbuffer'],['WebGLRenderingContext', 'blendColor'],['WebGLRenderingContext', 'blendEquation'],['WebGLRenderingContext', 'blendEquationSeparate'],['WebGLRenderingContext', 'blendFunc'],['WebGLRenderingContext', 'blendFuncSeparate'],['WebGLRenderingContext', 'bufferData'],['WebGLRenderingContext', 'bufferSubData'],['WebGLRenderingContext', 'checkFramebufferStatus'],['WebGLRenderingContext', 'compileShader'],['WebGLRenderingContext', 'compressedTexImage2D'],['WebGLRenderingContext', 'compressedTexSubImage2D'],['WebGLRenderingContext', 'copyTexImage2D'],['WebGLRenderingContext', 'copyTexSubImage2D'],['WebGLRenderingContext', 'createBuffer'],['WebGLRenderingContext', 'createFramebuffer'],['WebGLRenderingContext', 'createProgram'],['WebGLRenderingContext', 'createRenderbuffer'],['WebGLRenderingContext', 'createShader'],['WebGLRenderingContext', 'createTexture'],['WebGLRenderingContext', 'cullFace'],['WebGLRenderingContext', 'deleteBuffer'],['WebGLRenderingContext', 'deleteFramebuffer'],['WebGLRenderingContext', 'deleteProgram'],['WebGLRenderingContext', 'deleteRenderbuffer'],['WebGLRenderingContext', 'deleteShader'],['WebGLRenderingContext', 'deleteTexture'],['WebGLRenderingContext', 'depthFunc'],['WebGLRenderingContext', 'depthMask'],['WebGLRenderingContext', 'depthRange'],['WebGLRenderingContext', 'detachShader'],['WebGLRenderingContext', 'disable'],['WebGLRenderingContext', 'enable'],['WebGLRenderingContext', 'finish'],['WebGLRenderingContext', 'flush'],['WebGLRenderingContext', 'framebufferRenderbuffer'],['WebGLRenderingContext', 'framebufferTexture2D'],['WebGLRenderingContext', 'frontFace'],['WebGLRenderingContext', 'generateMipmap'],['WebGLRenderingContext', 'getActiveAttrib'],['WebGLRenderingContext', 'getActiveUniform'],['WebGLRenderingContext', 'getAttachedShaders'],['WebGLRenderingContext', 'getAttribLocation'],['WebGLRenderingContext', 'getBufferParameter'],['WebGLRenderingContext', 'getContextAttributes'],['WebGLRenderingContext', 'getError'],['WebGLRenderingContext', 'getExtension'],['WebGLRenderingContext', 'getFramebufferAttachmentParameter'],['WebGLRenderingContext', 'getParameter'],['WebGLRenderingContext', 'getProgramInfoLog'],['WebGLRenderingContext', 'getProgramParameter'],['WebGLRenderingContext', 'getRenderbufferParameter'],['WebGLRenderingContext', 'getShaderInfoLog'],['WebGLRenderingContext', 'getShaderParameter'],['WebGLRenderingContext', 'getShaderPrecisionFormat'],['WebGLRenderingContext', 'getShaderSource'],['WebGLRenderingContext', 'getSupportedExtensions'],['WebGLRenderingContext', 'getTexParameter'],['WebGLRenderingContext', 'getUniform'],['WebGLRenderingContext', 'getUniformLocation'],['WebGLRenderingContext', 'getVertexAttrib'],['WebGLRenderingContext', 'getVertexAttribOffset'],['WebGLRenderingContext', 'hint'],['WebGLRenderingContext', 'isBuffer'],['WebGLRenderingContext', 'isContextLost'],['WebGLRenderingContext', 'isEnabled'],['WebGLRenderingContext', 'isFramebuffer'],['WebGLRenderingContext', 'isProgram'],['WebGLRenderingContext', 'isRenderbuffer'],['WebGLRenderingContext', 'isShader'],['WebGLRenderingContext', 'isTexture'],['WebGLRenderingContext', 'lineWidth'],['WebGLRenderingContext', 'linkProgram'],['WebGLRenderingContext', 'pixelStorei'],['WebGLRenderingContext', 'polygonOffset'],['WebGLRenderingContext', 'readPixels'],['WebGLRenderingContext', 'renderbufferStorage'],['WebGLRenderingContext', 'sampleCoverage'],['WebGLRenderingContext', 'shaderSource'],['WebGLRenderingContext', 'stencilFunc'],['WebGLRenderingContext', 'stencilFuncSeparate'],['WebGLRenderingContext', 'stencilMask'],['WebGLRenderingContext', 'stencilMaskSeparate'],['WebGLRenderingContext', 'stencilOp'],['WebGLRenderingContext', 'stencilOpSeparate'],['WebGLRenderingContext', 'texImage2D'],['WebGLRenderingContext', 'texParameterf'],['WebGLRenderingContext', 'texParameteri'],['WebGLRenderingContext', 'texSubImage2D'],['WebGLRenderingContext', 'uniform1fv'],['WebGLRenderingContext', 'uniform1iv'],['WebGLRenderingContext', 'uniform2fv'],['WebGLRenderingContext', 'uniform2iv'],['WebGLRenderingContext', 'uniform3fv'],['WebGLRenderingContext', 'uniform3iv'],['WebGLRenderingContext', 'uniform4fv'],['WebGLRenderingContext', 'uniform4iv'],['WebGLRenderingContext', 'uniformMatrix2fv'],['WebGLRenderingContext', 'uniformMatrix3fv'],['WebGLRenderingContext', 'uniformMatrix4fv'],['WebGLRenderingContext', 'useProgram'],['WebGLRenderingContext', 'validateProgram'],['WebGLRenderingContext', 'vertexAttrib1fv'],['WebGLRenderingContext', 'vertexAttrib2fv'],['WebGLRenderingContext', 'vertexAttrib3fv'],['WebGLRenderingContext', 'vertexAttrib4fv'],['WebGLRenderingContext', 'vertexAttribPointer'],['WebGLRenderingContext', 'bindBuffer'],['WebGLRenderingContext', 'bindFramebuffer'],['WebGLRenderingContext', 'bindTexture'],['WebGLRenderingContext', 'clear'],['WebGLRenderingContext', 'clearColor'],['WebGLRenderingContext', 'clearDepth'],['WebGLRenderingContext', 'clearStencil'],['WebGLRenderingContext', 'colorMask'],['WebGLRenderingContext', 'disableVertexAttribArray'],['WebGLRenderingContext', 'drawArrays'],['WebGLRenderingContext', 'drawElements'],['WebGLRenderingContext', 'enableVertexAttribArray'],['WebGLRenderingContext', 'scissor'],['WebGLRenderingContext', 'uniform1f'],['WebGLRenderingContext', 'uniform1i'],['WebGLRenderingContext', 'uniform2f'],['WebGLRenderingContext', 'uniform2i'],['WebGLRenderingContext', 'uniform3f'],['WebGLRenderingContext', 'uniform3i'],['WebGLRenderingContext', 'uniform4f'],['WebGLRenderingContext', 'uniform4i'],['WebGLRenderingContext', 'vertexAttrib1f'],['WebGLRenderingContext', 'vertexAttrib2f'],['WebGLRenderingContext', 'vertexAttrib3f'],['WebGLRenderingContext', 'vertexAttrib4f'],['WebGLRenderingContext', 'viewport'],['WebGL2RenderingContext', 'activeTexture'],['WebGL2RenderingContext', 'attachShader'],['WebGL2RenderingContext', 'beginQuery'],['WebGL2RenderingContext', 'beginTransformFeedback'],['WebGL2RenderingContext', 'bindAttribLocation'],['WebGL2RenderingContext', 'bindBufferBase'],['WebGL2RenderingContext', 'bindBufferRange'],['WebGL2RenderingContext', 'bindRenderbuffer'],['WebGL2RenderingContext', 'bindSampler'],['WebGL2RenderingContext', 'bindTransformFeedback'],['WebGL2RenderingContext', 'bindVertexArray'],['WebGL2RenderingContext', 'blendColor'],['WebGL2RenderingContext', 'blendEquation'],['WebGL2RenderingContext', 'blendEquationSeparate'],['WebGL2RenderingContext', 'blendFunc'],['WebGL2RenderingContext', 'blendFuncSeparate'],['WebGL2RenderingContext', 'blitFramebuffer'],['WebGL2RenderingContext', 'bufferData'],['WebGL2RenderingContext', 'bufferSubData'],['WebGL2RenderingContext', 'checkFramebufferStatus'],['WebGL2RenderingContext', 'clearBufferfi'],['WebGL2RenderingContext', 'clearBufferfv'],['WebGL2RenderingContext', 'clearBufferiv'],['WebGL2RenderingContext', 'clearBufferuiv'],['WebGL2RenderingContext', 'clientWaitSync'],['WebGL2RenderingContext', 'compileShader'],['WebGL2RenderingContext', 'compressedTexImage2D'],['WebGL2RenderingContext', 'compressedTexImage3D'],['WebGL2RenderingContext', 'compressedTexSubImage2D'],['WebGL2RenderingContext', 'compressedTexSubImage3D'],['WebGL2RenderingContext', 'copyBufferSubData'],['WebGL2RenderingContext', 'copyTexImage2D'],['WebGL2RenderingContext', 'copyTexSubImage2D'],['WebGL2RenderingContext', 'copyTexSubImage3D'],['WebGL2RenderingContext', 'createBuffer'],['WebGL2RenderingContext', 'createFramebuffer'],['WebGL2RenderingContext', 'createProgram'],['WebGL2RenderingContext', 'createQuery'],['WebGL2RenderingContext', 'createRenderbuffer'],['WebGL2RenderingContext', 'createSampler'],['WebGL2RenderingContext', 'createShader'],['WebGL2RenderingContext', 'createTexture'],['WebGL2RenderingContext', 'createTransformFeedback'],['WebGL2RenderingContext', 'createVertexArray'],['WebGL2RenderingContext', 'cullFace'],['WebGL2RenderingContext', 'deleteBuffer'],['WebGL2RenderingContext', 'deleteFramebuffer'],['WebGL2RenderingContext', 'deleteProgram'],['WebGL2RenderingContext', 'deleteQuery'],['WebGL2RenderingContext', 'deleteRenderbuffer'],['WebGL2RenderingContext', 'deleteSampler'],['WebGL2RenderingContext', 'deleteShader'],['WebGL2RenderingContext', 'deleteSync'],['WebGL2RenderingContext', 'deleteTexture'],['WebGL2RenderingContext', 'deleteTransformFeedback'],['WebGL2RenderingContext', 'deleteVertexArray'],['WebGL2RenderingContext', 'depthFunc'],['WebGL2RenderingContext', 'depthMask'],['WebGL2RenderingContext', 'depthRange'],['WebGL2RenderingContext', 'detachShader'],['WebGL2RenderingContext', 'disable'],['WebGL2RenderingContext', 'drawArraysInstanced'],['WebGL2RenderingContext', 'drawBuffers'],['WebGL2RenderingContext', 'drawElementsInstanced'],['WebGL2RenderingContext', 'drawRangeElements'],['WebGL2RenderingContext', 'enable'],['WebGL2RenderingContext', 'endQuery'],['WebGL2RenderingContext', 'endTransformFeedback'],['WebGL2RenderingContext', 'fenceSync'],['WebGL2RenderingContext', 'finish'],['WebGL2RenderingContext', 'flush'],['WebGL2RenderingContext', 'framebufferRenderbuffer'],['WebGL2RenderingContext', 'framebufferTexture2D'],['WebGL2RenderingContext', 'framebufferTextureLayer'],['WebGL2RenderingContext', 'frontFace'],['WebGL2RenderingContext', 'generateMipmap'],['WebGL2RenderingContext', 'getActiveAttrib'],['WebGL2RenderingContext', 'getActiveUniform'],['WebGL2RenderingContext', 'getActiveUniformBlockName'],['WebGL2RenderingContext', 'getActiveUniformBlockParameter'],['WebGL2RenderingContext', 'getActiveUniforms'],['WebGL2RenderingContext', 'getAttachedShaders'],['WebGL2RenderingContext', 'getAttribLocation'],['WebGL2RenderingContext', 'getBufferParameter'],['WebGL2RenderingContext', 'getBufferSubData'],['WebGL2RenderingContext', 'getContextAttributes'],['WebGL2RenderingContext', 'getError'],['WebGL2RenderingContext', 'getExtension'],['WebGL2RenderingContext', 'getFragDataLocation'],['WebGL2RenderingContext', 'getFramebufferAttachmentParameter'],['WebGL2RenderingContext', 'getIndexedParameter'],['WebGL2RenderingContext', 'getInternalformatParameter'],['WebGL2RenderingContext', 'getParameter'],['WebGL2RenderingContext', 'getProgramInfoLog'],['WebGL2RenderingContext', 'getProgramParameter'],['WebGL2RenderingContext', 'getQuery'],['WebGL2RenderingContext', 'getQueryParameter'],['WebGL2RenderingContext', 'getRenderbufferParameter'],['WebGL2RenderingContext', 'getSamplerParameter'],['WebGL2RenderingContext', 'getShaderInfoLog'],['WebGL2RenderingContext', 'getShaderParameter'],['WebGL2RenderingContext', 'getShaderPrecisionFormat'],['WebGL2RenderingContext', 'getShaderSource'],['WebGL2RenderingContext', 'getSupportedExtensions'],['WebGL2RenderingContext', 'getSyncParameter'],['WebGL2RenderingContext', 'getTexParameter'],['WebGL2RenderingContext', 'getTransformFeedbackVarying'],['WebGL2RenderingContext', 'getUniform'],['WebGL2RenderingContext', 'getUniformBlockIndex'],['WebGL2RenderingContext', 'getUniformIndices'],['WebGL2RenderingContext', 'getUniformLocation'],['WebGL2RenderingContext', 'getVertexAttrib'],['WebGL2RenderingContext', 'getVertexAttribOffset'],['WebGL2RenderingContext', 'hint'],['WebGL2RenderingContext', 'invalidateFramebuffer'],['WebGL2RenderingContext', 'invalidateSubFramebuffer'],['WebGL2RenderingContext', 'isBuffer'],['WebGL2RenderingContext', 'isContextLost'],['WebGL2RenderingContext', 'isEnabled'],['WebGL2RenderingContext', 'isFramebuffer'],['WebGL2RenderingContext', 'isProgram'],['WebGL2RenderingContext', 'isQuery'],['WebGL2RenderingContext', 'isRenderbuffer'],['WebGL2RenderingContext', 'isSampler'],['WebGL2RenderingContext', 'isShader'],['WebGL2RenderingContext', 'isSync'],['WebGL2RenderingContext', 'isTexture'],['WebGL2RenderingContext', 'isTransformFeedback'],['WebGL2RenderingContext', 'isVertexArray'],['WebGL2RenderingContext', 'lineWidth'],['WebGL2RenderingContext', 'linkProgram'],['WebGL2RenderingContext', 'pauseTransformFeedback'],['WebGL2RenderingContext', 'pixelStorei'],['WebGL2RenderingContext', 'polygonOffset'],['WebGL2RenderingContext', 'readBuffer'],['WebGL2RenderingContext', 'readPixels'],['WebGL2RenderingContext', 'renderbufferStorage'],['WebGL2RenderingContext', 'renderbufferStorageMultisample'],['WebGL2RenderingContext', 'resumeTransformFeedback'],['WebGL2RenderingContext', 'sampleCoverage'],['WebGL2RenderingContext', 'samplerParameterf'],['WebGL2RenderingContext', 'samplerParameteri'],['WebGL2RenderingContext', 'shaderSource'],['WebGL2RenderingContext', 'stencilFunc'],['WebGL2RenderingContext', 'stencilFuncSeparate'],['WebGL2RenderingContext', 'stencilMask'],['WebGL2RenderingContext', 'stencilMaskSeparate'],['WebGL2RenderingContext', 'stencilOp'],['WebGL2RenderingContext', 'stencilOpSeparate'],['WebGL2RenderingContext', 'texImage2D'],['WebGL2RenderingContext', 'texImage3D'],['WebGL2RenderingContext', 'texParameterf'],['WebGL2RenderingContext', 'texParameteri'],['WebGL2RenderingContext', 'texStorage2D'],['WebGL2RenderingContext', 'texStorage3D'],['WebGL2RenderingContext', 'texSubImage2D'],['WebGL2RenderingContext', 'texSubImage3D'],['WebGL2RenderingContext', 'transformFeedbackVaryings'],['WebGL2RenderingContext', 'uniform1fv'],['WebGL2RenderingContext', 'uniform1iv'],['WebGL2RenderingContext', 'uniform1ui'],['WebGL2RenderingContext', 'uniform1uiv'],['WebGL2RenderingContext', 'uniform2fv'],['WebGL2RenderingContext', 'uniform2iv'],['WebGL2RenderingContext', 'uniform2ui'],['WebGL2RenderingContext', 'uniform2uiv'],['WebGL2RenderingContext', 'uniform3fv'],['WebGL2RenderingContext', 'uniform3iv'],['WebGL2RenderingContext', 'uniform3ui'],['WebGL2RenderingContext', 'uniform3uiv'],['WebGL2RenderingContext', 'uniform4fv'],['WebGL2RenderingContext', 'uniform4iv'],['WebGL2RenderingContext', 'uniform4ui'],['WebGL2RenderingContext', 'uniform4uiv'],['WebGL2RenderingContext', 'uniformBlockBinding'],['WebGL2RenderingContext', 'uniformMatrix2fv'],['WebGL2RenderingContext', 'uniformMatrix2x3fv'],['WebGL2RenderingContext', 'uniformMatrix2x4fv'],['WebGL2RenderingContext', 'uniformMatrix3fv'],['WebGL2RenderingContext', 'uniformMatrix3x2fv'],['WebGL2RenderingContext', 'uniformMatrix3x4fv'],['WebGL2RenderingContext', 'uniformMatrix4fv'],['WebGL2RenderingContext', 'uniformMatrix4x2fv'],['WebGL2RenderingContext', 'uniformMatrix4x3fv'],['WebGL2RenderingContext', 'useProgram'],['WebGL2RenderingContext', 'validateProgram'],['WebGL2RenderingContext', 'vertexAttrib1fv'],['WebGL2RenderingContext', 'vertexAttrib2fv'],['WebGL2RenderingContext', 'vertexAttrib3fv'],['WebGL2RenderingContext', 'vertexAttrib4fv'],['WebGL2RenderingContext', 'vertexAttribDivisor'],['WebGL2RenderingContext', 'vertexAttribI4i'],['WebGL2RenderingContext', 'vertexAttribI4iv'],['WebGL2RenderingContext', 'vertexAttribI4ui'],['WebGL2RenderingContext', 'vertexAttribI4uiv'],['WebGL2RenderingContext', 'vertexAttribIPointer'],['WebGL2RenderingContext', 'vertexAttribPointer'],['WebGL2RenderingContext', 'waitSync'],['WebGL2RenderingContext', 'bindBuffer'],['WebGL2RenderingContext', 'bindFramebuffer'],['WebGL2RenderingContext', 'bindTexture'],['WebGL2RenderingContext', 'clear'],['WebGL2RenderingContext', 'clearColor'],['WebGL2RenderingContext', 'clearDepth'],['WebGL2RenderingContext', 'clearStencil'],['WebGL2RenderingContext', 'colorMask'],['WebGL2RenderingContext', 'disableVertexAttribArray'],['WebGL2RenderingContext', 'drawArrays'],['WebGL2RenderingContext', 'drawElements'],['WebGL2RenderingContext', 'enableVertexAttribArray'],['WebGL2RenderingContext', 'scissor'],['WebGL2RenderingContext', 'uniform1f'],['WebGL2RenderingContext', 'uniform1i'],['WebGL2RenderingContext', 'uniform2f'],['WebGL2RenderingContext', 'uniform2i'],['WebGL2RenderingContext', 'uniform3f'],['WebGL2RenderingContext', 'uniform3i'],['WebGL2RenderingContext', 'uniform4f'],['WebGL2RenderingContext', 'uniform4i'],['WebGL2RenderingContext', 'vertexAttrib1f'],['WebGL2RenderingContext', 'vertexAttrib2f'],['WebGL2RenderingContext', 'vertexAttrib3f'],['WebGL2RenderingContext', 'vertexAttrib4f'],['WebGL2RenderingContext', 'viewport'],['VTTCue', 'getCueAsHTML'],['URLSearchParams', 'append'],['URLSearchParams', 'get'],['URLSearchParams', 'getAll'],['URLSearchParams', 'has'],['URLSearchParams', 'set'],['URLSearchParams', 'sort'],['URLSearchParams', 'toString'],['URLSearchParams', 'entries'],['URLSearchParams', 'forEach'],['URLSearchParams', 'keys'],['URLSearchParams', 'values'],['URL', 'toJSON'],['URL', 'toString'],['UIEvent', 'initUIEvent'],['TreeWalker', 'firstChild'],['TreeWalker', 'lastChild'],['TreeWalker', 'nextNode'],['TreeWalker', 'nextSibling'],['TreeWalker', 'parentNode'],['TreeWalker', 'previousNode'],['TreeWalker', 'previousSibling'],['TouchList', 'item'],['TimeRanges', 'end'],['TimeRanges', 'start'],['TextTrackList', 'getTrackById'],['TextTrackCueList', 'getCueById'],['TextTrack', 'addCue'],['TextTrack', 'removeCue'],['TextEvent', 'initTextEvent'],['TextEncoder', 'encode'],['TextEncoder', 'encodeInto'],['TextDecoder', 'decode'],['Text', 'splitText'],['TaskAttributionTiming', 'toJSON'],['SyncManager', 'getTags'],['SyncManager', 'register'],['StyleSheetList', 'item'],['StylePropertyMapReadOnly', 'get'],['StylePropertyMapReadOnly', 'getAll'],['StylePropertyMapReadOnly', 'has'],['StylePropertyMapReadOnly', 'entries'],['StylePropertyMapReadOnly', 'forEach'],['StylePropertyMapReadOnly', 'keys'],['StylePropertyMapReadOnly', 'values'],['StylePropertyMap', 'append'],['StylePropertyMap', 'clear'],['StylePropertyMap', 'set'],['StorageEvent', 'initStorageEvent'],['Storage', 'clear'],['Storage', 'getItem'],['Storage', 'key'],['Storage', 'removeItem'],['Storage', 'setItem'],['ShadowRoot', 'elementFromPoint'],['ShadowRoot', 'elementsFromPoint'],['ShadowRoot', 'getSelection'],['ShadowRoot', 'getAnimations'],['ShadowRoot', 'getInnerHTML'],['Selection', 'addRange'],['Selection', 'collapse'],['Selection', 'collapseToEnd'],['Selection', 'collapseToStart'],['Selection', 'containsNode'],['Selection', 'deleteFromDocument'],['Selection', 'empty'],['Selection', 'extend'],['Selection', 'getRangeAt'],['Selection', 'modify'],['Selection', 'removeAllRanges'],['Selection', 'removeRange'],['Selection', 'selectAllChildren'],['Selection', 'setBaseAndExtent'],['Selection', 'setPosition'],['Selection', 'toString'],['ScreenOrientation', 'lock'],['ScreenOrientation', 'unlock'],['SVGTransformList', 'appendItem'],['SVGTransformList', 'clear'],['SVGTransformList', 'consolidate'],['SVGTransformList', 'createSVGTransformFromMatrix'],['SVGTransformList', 'getItem'],['SVGTransformList', 'initialize'],['SVGTransformList', 'insertItemBefore'],['SVGTransformList', 'removeItem'],['SVGTransformList', 'replaceItem'],['SVGTransform', 'setMatrix'],['SVGTransform', 'setRotate'],['SVGTransform', 'setScale'],['SVGTransform', 'setSkewX'],['SVGTransform', 'setSkewY'],['SVGTransform', 'setTranslate'],['SVGTextContentElement', 'getCharNumAtPosition'],['SVGTextContentElement', 'getComputedTextLength'],['SVGTextContentElement', 'getEndPositionOfChar'],['SVGTextContentElement', 'getExtentOfChar'],['SVGTextContentElement', 'getNumberOfChars'],['SVGTextContentElement', 'getRotationOfChar'],['SVGTextContentElement', 'getStartPositionOfChar'],['SVGTextContentElement', 'getSubStringLength'],['SVGTextContentElement', 'selectSubString'],['SVGStringList', 'appendItem'],['SVGStringList', 'clear'],['SVGStringList', 'getItem'],['SVGStringList', 'initialize'],['SVGStringList', 'insertItemBefore'],['SVGStringList', 'removeItem'],['SVGStringList', 'replaceItem'],['SVGSVGElement', 'animationsPaused'],['SVGSVGElement', 'checkEnclosure'],['SVGSVGElement', 'checkIntersection'],['SVGSVGElement', 'createSVGAngle'],['SVGSVGElement', 'createSVGLength'],['SVGSVGElement', 'createSVGMatrix'],['SVGSVGElement', 'createSVGNumber'],['SVGSVGElement', 'createSVGPoint'],['SVGSVGElement', 'createSVGRect'],['SVGSVGElement', 'createSVGTransform'],['SVGSVGElement', 'createSVGTransformFromMatrix'],['SVGSVGElement', 'deselectAll'],['SVGSVGElement', 'forceRedraw'],['SVGSVGElement', 'getCurrentTime'],['SVGSVGElement', 'getElementById'],['SVGSVGElement', 'getEnclosureList'],['SVGSVGElement', 'getIntersectionList'],['SVGSVGElement', 'pauseAnimations'],['SVGSVGElement', 'setCurrentTime'],['SVGSVGElement', 'suspendRedraw'],['SVGSVGElement', 'unpauseAnimations'],['SVGSVGElement', 'unsuspendRedraw'],['SVGSVGElement', 'unsuspendRedrawAll'],['SVGPointList', 'appendItem'],['SVGPointList', 'clear'],['SVGPointList', 'getItem'],['SVGPointList', 'initialize'],['SVGPointList', 'insertItemBefore'],['SVGPointList', 'removeItem'],['SVGPointList', 'replaceItem'],['SVGPoint', 'matrixTransform'],['SVGNumberList', 'appendItem'],['SVGNumberList', 'clear'],['SVGNumberList', 'getItem'],['SVGNumberList', 'initialize'],['SVGNumberList', 'insertItemBefore'],['SVGNumberList', 'removeItem'],['SVGNumberList', 'replaceItem'],['SVGMatrix', 'flipX'],['SVGMatrix', 'flipY'],['SVGMatrix', 'inverse'],['SVGMatrix', 'multiply'],['SVGMatrix', 'rotate'],['SVGMatrix', 'rotateFromVector'],['SVGMatrix', 'scale'],['SVGMatrix', 'scaleNonUniform'],['SVGMatrix', 'skewX'],['SVGMatrix', 'skewY'],['SVGMatrix', 'translate'],['SVGMarkerElement', 'setOrientToAngle'],['SVGMarkerElement', 'setOrientToAuto'],['SVGLengthList', 'appendItem'],['SVGLengthList', 'clear'],['SVGLengthList', 'getItem'],['SVGLengthList', 'initialize'],['SVGLengthList', 'insertItemBefore'],['SVGLengthList', 'removeItem'],['SVGLengthList', 'replaceItem'],['SVGLength', 'convertToSpecifiedUnits'],['SVGLength', 'newValueSpecifiedUnits'],['SVGImageElement', 'decode'],['SVGGraphicsElement', 'getBBox'],['SVGGraphicsElement', 'getCTM'],['SVGGraphicsElement', 'getScreenCTM'],['SVGGeometryElement', 'getPointAtLength'],['SVGGeometryElement', 'getTotalLength'],['SVGGeometryElement', 'isPointInFill'],['SVGGeometryElement', 'isPointInStroke'],['SVGFEGaussianBlurElement', 'setStdDeviation'],['SVGFEDropShadowElement', 'setStdDeviation'],['SVGElement', 'blur'],['SVGElement', 'focus'],['SVGAnimationElement', 'beginElement'],['SVGAnimationElement', 'beginElementAt'],['SVGAnimationElement', 'endElement'],['SVGAnimationElement', 'endElementAt'],['SVGAnimationElement', 'getCurrentTime'],['SVGAnimationElement', 'getSimpleDuration'],['SVGAnimationElement', 'getStartTime'],['SVGAngle', 'convertToSpecifiedUnits'],['SVGAngle', 'newValueSpecifiedUnits'],['Response', 'arrayBuffer'],['Response', 'blob'],['Response', 'clone'],['Response', 'formData'],['Response', 'json'],['Response', 'text'],['ResizeObserver', 'disconnect'],['ResizeObserver', 'observe'],['ResizeObserver', 'unobserve'],['Request', 'arrayBuffer'],['Request', 'blob'],['Request', 'clone'],['Request', 'formData'],['Request', 'json'],['Request', 'text'],['ReportingObserver', 'disconnect'],['ReportingObserver', 'observe'],['ReportingObserver', 'takeRecords'],['ReadableStreamDefaultReader', 'cancel'],['ReadableStreamDefaultReader', 'read'],['ReadableStreamDefaultReader', 'releaseLock'],['ReadableStreamDefaultController', 'close'],['ReadableStreamDefaultController', 'enqueue'],['ReadableStreamDefaultController', 'error'],['ReadableStreamBYOBRequest', 'respond'],['ReadableStreamBYOBRequest', 'respondWithNewView'],['ReadableStreamBYOBReader', 'cancel'],['ReadableStreamBYOBReader', 'read'],['ReadableStreamBYOBReader', 'releaseLock'],['ReadableStream', 'cancel'],['ReadableStream', 'getReader'],['ReadableStream', 'pipeThrough'],['ReadableStream', 'pipeTo'],['ReadableStream', 'tee'],['ReadableByteStreamController', 'close'],['ReadableByteStreamController', 'enqueue'],['ReadableByteStreamController', 'error'],['Range', 'cloneContents'],['Range', 'cloneRange'],['Range', 'collapse'],['Range', 'compareBoundaryPoints'],['Range', 'comparePoint'],['Range', 'createContextualFragment'],['Range', 'deleteContents'],['Range', 'detach'],['Range', 'expand'],['Range', 'extractContents'],['Range', 'getBoundingClientRect'],['Range', 'getClientRects'],['Range', 'insertNode'],['Range', 'intersectsNode'],['Range', 'isPointInRange'],['Range', 'selectNode'],['Range', 'selectNodeContents'],['Range', 'setEnd'],['Range', 'setEndAfter'],['Range', 'setEndBefore'],['Range', 'setStart'],['Range', 'setStartAfter'],['Range', 'setStartBefore'],['Range', 'surroundContents'],['Range', 'toString'],['RTCStatsReport', 'entries'],['RTCStatsReport', 'forEach'],['RTCStatsReport', 'get'],['RTCStatsReport', 'has'],['RTCStatsReport', 'keys'],['RTCStatsReport', 'values'],['RTCSessionDescription', 'toJSON'],['RTCRtpTransceiver', 'setCodecPreferences'],['RTCRtpTransceiver', 'stop'],['RTCRtpSender', 'createEncodedStreams'],['RTCRtpSender', 'getParameters'],['RTCRtpSender', 'getStats'],['RTCRtpSender', 'replaceTrack'],['RTCRtpSender', 'setParameters'],['RTCRtpSender', 'setStreams'],['RTCRtpReceiver', 'createEncodedStreams'],['RTCRtpReceiver', 'getContributingSources'],['RTCRtpReceiver', 'getParameters'],['RTCRtpReceiver', 'getStats'],['RTCRtpReceiver', 'getSynchronizationSources'],['RTCPeerConnection', 'addIceCandidate'],['RTCPeerConnection', 'addStream'],['RTCPeerConnection', 'addTrack'],['RTCPeerConnection', 'addTransceiver'],['RTCPeerConnection', 'close'],['RTCPeerConnection', 'createAnswer'],['RTCPeerConnection', 'createDTMFSender'],['RTCPeerConnection', 'createDataChannel'],['RTCPeerConnection', 'createOffer'],['RTCPeerConnection', 'getConfiguration'],['RTCPeerConnection', 'getLocalStreams'],['RTCPeerConnection', 'getReceivers'],['RTCPeerConnection', 'getRemoteStreams'],['RTCPeerConnection', 'getSenders'],['RTCPeerConnection', 'getStats'],['RTCPeerConnection', 'getTransceivers'],['RTCPeerConnection', 'removeStream'],['RTCPeerConnection', 'removeTrack'],['RTCPeerConnection', 'restartIce'],['RTCPeerConnection', 'setConfiguration'],['RTCPeerConnection', 'setLocalDescription'],['RTCPeerConnection', 'setRemoteDescription'],['RTCIceCandidate', 'toJSON'],['RTCEncodedVideoFrame', 'getMetadata'],['RTCEncodedVideoFrame', 'toString'],['RTCEncodedAudioFrame', 'getMetadata'],['RTCEncodedAudioFrame', 'toString'],['RTCDtlsTransport', 'getRemoteCertificates'],['RTCDataChannel', 'close'],['RTCDataChannel', 'send'],['RTCDTMFSender', 'insertDTMF'],['RTCCertificate', 'getFingerprints'],['PointerEvent', 'getCoalescedEvents'],['PointerEvent', 'getPredictedEvents'],['PluginArray', 'item'],['PluginArray', 'namedItem'],['PluginArray', 'refresh'],['Plugin', 'item'],['Plugin', 'namedItem'],['PerformanceTiming', 'toJSON'],['PerformanceServerTiming', 'toJSON'],['PerformanceResourceTiming', 'toJSON'],['PerformanceObserverEntryList', 'getEntries'],['PerformanceObserverEntryList', 'getEntriesByName'],['PerformanceObserverEntryList', 'getEntriesByType'],['PerformanceObserver', 'disconnect'],['PerformanceObserver', 'observe'],['PerformanceObserver', 'takeRecords'],['PerformanceNavigationTiming', 'toJSON'],['PerformanceNavigation', 'toJSON'],['PerformanceLongTaskTiming', 'toJSON'],['PerformanceEventTiming', 'toJSON'],['PerformanceEntry', 'toJSON'],['PerformanceElementTiming', 'toJSON'],['Performance', 'clearMarks'],['Performance', 'clearMeasures'],['Performance', 'clearResourceTimings'],['Performance', 'getEntries'],['Performance', 'getEntriesByName'],['Performance', 'getEntriesByType'],['Performance', 'mark'],['Performance', 'measure'],['Performance', 'now'],['Performance', 'setResourceTimingBufferSize'],['Performance', 'toJSON'],['Path2D', 'addPath'],['Path2D', 'arc'],['Path2D', 'arcTo'],['Path2D', 'bezierCurveTo'],['Path2D', 'closePath'],['Path2D', 'ellipse'],['Path2D', 'lineTo'],['Path2D', 'moveTo'],['Path2D', 'quadraticCurveTo'],['Path2D', 'rect'],['PannerNode', 'setOrientation'],['PannerNode', 'setPosition'],['OscillatorNode', 'setPeriodicWave'],['OffscreenCanvasRenderingContext2D', 'clip'],['OffscreenCanvasRenderingContext2D', 'createImageData'],['OffscreenCanvasRenderingContext2D', 'createLinearGradient'],['OffscreenCanvasRenderingContext2D', 'createPattern'],['OffscreenCanvasRenderingContext2D', 'createRadialGradient'],['OffscreenCanvasRenderingContext2D', 'drawImage'],['OffscreenCanvasRenderingContext2D', 'fill'],['OffscreenCanvasRenderingContext2D', 'fillText'],['OffscreenCanvasRenderingContext2D', 'getImageData'],['OffscreenCanvasRenderingContext2D', 'getLineDash'],['OffscreenCanvasRenderingContext2D', 'getTransform'],['OffscreenCanvasRenderingContext2D', 'isPointInPath'],['OffscreenCanvasRenderingContext2D', 'isPointInStroke'],['OffscreenCanvasRenderingContext2D', 'measureText'],['OffscreenCanvasRenderingContext2D', 'putImageData'],['OffscreenCanvasRenderingContext2D', 'save'],['OffscreenCanvasRenderingContext2D', 'scale'],['OffscreenCanvasRenderingContext2D', 'setLineDash'],['OffscreenCanvasRenderingContext2D', 'setTransform'],['OffscreenCanvasRenderingContext2D', 'stroke'],['OffscreenCanvasRenderingContext2D', 'strokeText'],['OffscreenCanvasRenderingContext2D', 'transform'],['OffscreenCanvasRenderingContext2D', 'translate'],['OffscreenCanvasRenderingContext2D', 'arc'],['OffscreenCanvasRenderingContext2D', 'arcTo'],['OffscreenCanvasRenderingContext2D', 'beginPath'],['OffscreenCanvasRenderingContext2D', 'bezierCurveTo'],['OffscreenCanvasRenderingContext2D', 'clearRect'],['OffscreenCanvasRenderingContext2D', 'closePath'],['OffscreenCanvasRenderingContext2D', 'ellipse'],['OffscreenCanvasRenderingContext2D', 'fillRect'],['OffscreenCanvasRenderingContext2D', 'lineTo'],['OffscreenCanvasRenderingContext2D', 'moveTo'],['OffscreenCanvasRenderingContext2D', 'quadraticCurveTo'],['OffscreenCanvasRenderingContext2D', 'rect'],['OffscreenCanvasRenderingContext2D', 'resetTransform'],['OffscreenCanvasRenderingContext2D', 'restore'],['OffscreenCanvasRenderingContext2D', 'rotate'],['OffscreenCanvasRenderingContext2D', 'strokeRect'],['OffscreenCanvas', 'convertToBlob'],['OffscreenCanvas', 'getContext'],['OffscreenCanvas', 'transferToImageBitmap'],['OfflineAudioContext', 'resume'],['OfflineAudioContext', 'startRendering'],['OfflineAudioContext', 'suspend'],['NodeList', 'entries'],['NodeList', 'keys'],['NodeList', 'values'],['NodeList', 'forEach'],['NodeList', 'item'],['NodeIterator', 'detach'],['NodeIterator', 'nextNode'],['NodeIterator', 'previousNode'],['Node', 'appendChild'],['Node', 'cloneNode'],['Node', 'compareDocumentPosition'],['Node', 'contains'],['Node', 'getRootNode'],['Node', 'hasChildNodes'],['Node', 'insertBefore'],['Node', 'isDefaultNamespace'],['Node', 'isEqualNode'],['Node', 'isSameNode'],['Node', 'lookupNamespaceURI'],['Node', 'lookupPrefix'],['Node', 'normalize'],['Node', 'removeChild'],['Node', 'replaceChild'],
    ['Navigator', 'getBattery'],
    ['Navigator', 'getGamepads'],
    ['Navigator', 'javaEnabled'],
    ['Navigator', 'sendBeacon'],
    ['Navigator', 'vibrate'],['NamedNodeMap', 'getNamedItem'],['NamedNodeMap', 'getNamedItemNS'],['NamedNodeMap', 'item'],['NamedNodeMap', 'removeNamedItem'],['NamedNodeMap', 'removeNamedItemNS'],['NamedNodeMap', 'setNamedItem'],['NamedNodeMap', 'setNamedItemNS'],['MutationObserver', 'disconnect'],['MutationObserver', 'observe'],['MutationObserver', 'takeRecords'],['MutationEvent', 'initMutationEvent'],
    ['MouseEvent', 'getModifierState'],
    ['MouseEvent', 'initMouseEvent'],
    ['MimeTypeArray', 'item'],
    ['MimeTypeArray', 'namedItem'],['MessagePort', 'close'],['MessagePort', 'postMessage'],['MessagePort', 'start'],['MessageEvent', 'initMessageEvent'],['MediaStreamTrack', 'applyConstraints'],['MediaStreamTrack', 'clone'],['MediaStreamTrack', 'getCapabilities'],['MediaStreamTrack', 'getConstraints'],['MediaStreamTrack', 'getSettings'],['MediaStreamTrack', 'stop'],['MediaStream', 'addTrack'],['MediaStream', 'clone'],['MediaStream', 'getAudioTracks'],['MediaStream', 'getTrackById'],['MediaStream', 'getTracks'],['MediaStream', 'getVideoTracks'],['MediaStream', 'removeTrack'],['MediaRecorder', 'pause'],['MediaRecorder', 'requestData'],['MediaRecorder', 'resume'],['MediaRecorder', 'start'],['MediaRecorder', 'stop'],['MediaQueryList', 'addListener'],['MediaQueryList', 'removeListener'],['MediaList', 'appendMedium'],['MediaList', 'deleteMedium'],['MediaList', 'item'],['MediaList', 'toString'],['MediaCapabilities', 'decodingInfo'],['LayoutShiftAttribution', 'toJSON'],['LayoutShift', 'toJSON'],['LargestContentfulPaint', 'toJSON'],['KeyframeEffect', 'getKeyframes'],['KeyframeEffect', 'setKeyframes'],['KeyboardEvent', 'getModifierState'],['KeyboardEvent', 'initKeyboardEvent'],['IntersectionObserver', 'disconnect'],['IntersectionObserver', 'observe'],['IntersectionObserver', 'takeRecords'],['IntersectionObserver', 'unobserve'],['InputEvent', 'getTargetRanges'],['InputDeviceInfo', 'getCapabilities'],['ImageCapture', 'getPhotoCapabilities'],['ImageCapture', 'getPhotoSettings'],['ImageCapture', 'grabFrame'],['ImageCapture', 'takePhoto'],['ImageBitmapRenderingContext', 'transferFromImageBitmap'],['ImageBitmap', 'close'],['IdleDeadline', 'timeRemaining'],['IIRFilterNode', 'getFrequencyResponse'],['IDBTransaction', 'abort'],['IDBTransaction', 'commit'],['IDBTransaction', 'objectStore'],['IDBObjectStore', 'add'],['IDBObjectStore', 'clear'],['IDBObjectStore', 'count'],['IDBObjectStore', 'createIndex'],['IDBObjectStore', 'deleteIndex'],['IDBObjectStore', 'get'],['IDBObjectStore', 'getAll'],['IDBObjectStore', 'getAllKeys'],['IDBObjectStore', 'getKey'],['IDBObjectStore', 'index'],['IDBObjectStore', 'openCursor'],['IDBObjectStore', 'openKeyCursor'],['IDBObjectStore', 'put'],['IDBKeyRange', 'includes'],['IDBIndex', 'count'],['IDBIndex', 'get'],['IDBIndex', 'getAll'],['IDBIndex', 'getAllKeys'],['IDBIndex', 'getKey'],['IDBIndex', 'openCursor'],['IDBIndex', 'openKeyCursor'],['IDBFactory', 'cmp'],['IDBFactory', 'databases'],['IDBFactory', 'deleteDatabase'],['IDBFactory', 'open'],['IDBDatabase', 'close'],['IDBDatabase', 'createObjectStore'],['IDBDatabase', 'deleteObjectStore'],['IDBDatabase', 'transaction'],['IDBCursor', 'advance'],['IDBCursor', 'continuePrimaryKey'],['IDBCursor', 'update'],['History', 'back'],['History', 'forward'],['History', 'go'],['History', 'pushState'],['History', 'replaceState'],['Headers', 'append'],['Headers', 'get'],['Headers', 'has'],['Headers', 'set'],['Headers', 'entries'],['Headers', 'forEach'],['Headers', 'keys'],['Headers', 'values'],['HTMLVideoElement', 'cancelVideoFrameCallback'],['HTMLVideoElement', 'requestVideoFrameCallback'],['HTMLVideoElement', 'getVideoPlaybackQuality'],['HTMLVideoElement', 'requestPictureInPicture'],['HTMLVideoElement', 'webkitEnterFullScreen'],['HTMLVideoElement', 'webkitEnterFullscreen'],['HTMLVideoElement', 'webkitExitFullScreen'],['HTMLVideoElement', 'webkitExitFullscreen'],['HTMLTextAreaElement', 'checkValidity'],['HTMLTextAreaElement', 'reportValidity'],['HTMLTextAreaElement', 'select'],['HTMLTextAreaElement', 'setCustomValidity'],['HTMLTextAreaElement', 'setRangeText'],['HTMLTextAreaElement', 'setSelectionRange'],['HTMLTableSectionElement', 'deleteRow'],['HTMLTableSectionElement', 'insertRow'],['HTMLTableRowElement', 'deleteCell'],['HTMLTableRowElement', 'insertCell'],['HTMLTableElement', 'createCaption'],['HTMLTableElement', 'createTBody'],['HTMLTableElement', 'createTFoot'],['HTMLTableElement', 'createTHead'],['HTMLTableElement', 'deleteCaption'],['HTMLTableElement', 'deleteRow'],['HTMLTableElement', 'deleteTFoot'],['HTMLTableElement', 'deleteTHead'],['HTMLTableElement', 'insertRow'],['HTMLSlotElement', 'assign'],['HTMLSlotElement', 'assignedElements'],['HTMLSlotElement', 'assignedNodes'],['HTMLSelectElement', 'add'],['HTMLSelectElement', 'checkValidity'],['HTMLSelectElement', 'item'],['HTMLSelectElement', 'namedItem'],['HTMLSelectElement', 'remove'],['HTMLSelectElement', 'reportValidity'],['HTMLSelectElement', 'setCustomValidity'],['HTMLOutputElement', 'checkValidity'],['HTMLOutputElement', 'reportValidity'],['HTMLOutputElement', 'setCustomValidity'],['HTMLOptionsCollection', 'add'],['HTMLOptionsCollection', 'remove'],['HTMLObjectElement', 'checkValidity'],['HTMLObjectElement', 'getSVGDocument'],['HTMLObjectElement', 'reportValidity'],['HTMLObjectElement', 'setCustomValidity'],['HTMLMediaElement', 'addTextTrack'],['HTMLMediaElement', 'canPlayType'],['HTMLMediaElement', 'captureStream'],['HTMLMediaElement', 'load'],['HTMLMediaElement', 'pause'],['HTMLMediaElement', 'play'],['HTMLMediaElement', 'setSinkId'],['HTMLMarqueeElement', 'start'],['HTMLMarqueeElement', 'stop'],['HTMLInputElement', 'checkValidity'],['HTMLInputElement', 'reportValidity'],['HTMLInputElement', 'select'],['HTMLInputElement', 'setCustomValidity'],['HTMLInputElement', 'setRangeText'],['HTMLInputElement', 'setSelectionRange'],['HTMLInputElement', 'stepDown'],['HTMLInputElement', 'stepUp'],['HTMLImageElement', 'decode'],['HTMLIFrameElement', 'getSVGDocument'],
    ['HTMLFormControlsCollection', 'namedItem'],['HTMLFieldSetElement', 'checkValidity'],['HTMLFieldSetElement', 'reportValidity'],['HTMLFieldSetElement', 'setCustomValidity'],['HTMLEmbedElement', 'getSVGDocument'],['HTMLElement', 'attachInternals'],['HTMLElement', 'blur'],['HTMLElement', 'click'],['HTMLElement', 'focus'],['HTMLDialogElement', 'close'],['HTMLDialogElement', 'show'],['HTMLDialogElement', 'showModal'],['HTMLCollection', 'item'],['HTMLCollection', 'namedItem'],['HTMLCanvasElement', 'captureStream'],['HTMLCanvasElement', 'getContext'],['HTMLCanvasElement', 'toBlob'],['HTMLCanvasElement', 'toDataURL'],['HTMLCanvasElement', 'transferControlToOffscreen'],['HTMLButtonElement', 'checkValidity'],['HTMLButtonElement', 'reportValidity'],['HTMLButtonElement', 'setCustomValidity'],['HTMLAreaElement', 'toString'],
    ['HTMLAllCollection', 'item'],['HTMLAllCollection', 'namedItem'],['Geolocation', 'clearWatch'],['Geolocation', 'getCurrentPosition'],['Geolocation', 'watchPosition'],['GamepadHapticActuator', 'playEffect'],['GamepadHapticActuator', 'reset'],['FormData', 'append'],['FormData', 'get'],['FormData', 'getAll'],['FormData', 'has'],['FormData', 'set'],['FormData', 'entries'],['FormData', 'forEach'],['FormData', 'keys'],['FormData', 'values'],['FontFace', 'load'],['FileReader', 'abort'],['FileReader', 'readAsArrayBuffer'],['FileReader', 'readAsBinaryString'],['FileReader', 'readAsDataURL'],['FileReader', 'readAsText'],['FileList', 'item'],['FeaturePolicy', 'allowedFeatures'],['FeaturePolicy', 'allowsFeature'],['FeaturePolicy', 'features'],['FeaturePolicy', 'getAllowlistForFeature'],['External', 'AddSearchProvider'],['External', 'IsSearchProviderInstalled'],['EventTarget', 'addEventListener'],['EventTarget', 'dispatchEvent'],['EventTarget', 'removeEventListener'],['EventSource', 'close'],['EventCounts', 'entries'],['EventCounts', 'forEach'],['EventCounts', 'get'],['EventCounts', 'has'],['EventCounts', 'keys'],['EventCounts', 'values'],['Event', 'composedPath'],['Event', 'initEvent'],['Event', 'preventDefault'],['Event', 'stopImmediatePropagation'],['Event', 'stopPropagation'],['ElementInternals', 'checkValidity'],['ElementInternals', 'reportValidity'],['ElementInternals', 'setFormValue'],['ElementInternals', 'setValidity'],
    ['DocumentType', 'after'],['DocumentType', 'before'],['DocumentType', 'remove'],['DocumentType', 'replaceWith'],['DocumentFragment', 'append'],['DocumentFragment', 'getElementById'],['DocumentFragment', 'prepend'],['DocumentFragment', 'querySelector'],['DocumentFragment', 'querySelectorAll'],['DocumentFragment', 'replaceChildren'],
    ['DataTransferItemList', 'add'],['DataTransferItemList', 'clear'],['DataTransferItemList', 'remove'],['DataTransferItem', 'getAsFile'],['DataTransferItem', 'getAsString'],['DataTransferItem', 'webkitGetAsEntry'],['DataTransferItem', 'getAsFileSystemHandle'],['DataTransfer', 'clearData'],['DataTransfer', 'getData'],['DataTransfer', 'setData'],['DataTransfer', 'setDragImage'],['DOMTokenList', 'entries'],['DOMTokenList', 'keys'],['DOMTokenList', 'values'],['DOMTokenList', 'forEach'],['DOMTokenList', 'add'],['DOMTokenList', 'contains'],['DOMTokenList', 'item'],['DOMTokenList', 'remove'],['DOMTokenList', 'replace'],['DOMTokenList', 'supports'],['DOMTokenList', 'toggle'],['DOMTokenList', 'toString'],['DOMStringList', 'contains'],['DOMStringList', 'item'],['DOMRectReadOnly', 'toJSON'],['DOMRectList', 'item'],['DOMQuad', 'getBounds'],['DOMQuad', 'toJSON'],['DOMPointReadOnly', 'matrixTransform'],['DOMPointReadOnly', 'toJSON'],['DOMParser', 'parseFromString'],['DOMMatrixReadOnly', 'flipX'],['DOMMatrixReadOnly', 'flipY'],['DOMMatrixReadOnly', 'inverse'],['DOMMatrixReadOnly', 'multiply'],['DOMMatrixReadOnly', 'rotate'],['DOMMatrixReadOnly', 'rotateAxisAngle'],['DOMMatrixReadOnly', 'rotateFromVector'],['DOMMatrixReadOnly', 'scale'],['DOMMatrixReadOnly', 'scale3d'],['DOMMatrixReadOnly', 'scaleNonUniform'],['DOMMatrixReadOnly', 'skewX'],['DOMMatrixReadOnly', 'skewY'],['DOMMatrixReadOnly', 'toFloat32Array'],['DOMMatrixReadOnly', 'toFloat64Array'],['DOMMatrixReadOnly', 'toJSON'],['DOMMatrixReadOnly', 'transformPoint'],['DOMMatrixReadOnly', 'translate'],['DOMMatrixReadOnly', 'toString'],['DOMImplementation', 'createDocument'],['DOMImplementation', 'createDocumentType'],['DOMImplementation', 'createHTMLDocument'],['DOMImplementation', 'hasFeature'],['CustomEvent', 'initCustomEvent'],['CustomElementRegistry', 'define'],['CustomElementRegistry', 'get'],['CustomElementRegistry', 'upgrade'],['CustomElementRegistry', 'whenDefined'],['Crypto', 'getRandomValues'],['CompositionEvent', 'initCompositionEvent'],['CharacterData', 'after'],['CharacterData', 'appendData'],['CharacterData', 'before'],['CharacterData', 'deleteData'],['CharacterData', 'insertData'],['CharacterData', 'remove'],['CharacterData', 'replaceData'],['CharacterData', 'replaceWith'],['CharacterData', 'substringData'],['CanvasRenderingContext2D', 'clip'],['CanvasRenderingContext2D', 'createImageData'],['CanvasRenderingContext2D', 'createLinearGradient'],['CanvasRenderingContext2D', 'createPattern'],['CanvasRenderingContext2D', 'createRadialGradient'],['CanvasRenderingContext2D', 'drawFocusIfNeeded'],['CanvasRenderingContext2D', 'drawImage'],['CanvasRenderingContext2D', 'fill'],['CanvasRenderingContext2D', 'fillText'],['CanvasRenderingContext2D', 'getContextAttributes'],['CanvasRenderingContext2D', 'getImageData'],['CanvasRenderingContext2D', 'getLineDash'],['CanvasRenderingContext2D', 'getTransform'],['CanvasRenderingContext2D', 'isPointInPath'],['CanvasRenderingContext2D', 'isPointInStroke'],['CanvasRenderingContext2D', 'measureText'],['CanvasRenderingContext2D', 'putImageData'],['CanvasRenderingContext2D', 'save'],['CanvasRenderingContext2D', 'scale'],['CanvasRenderingContext2D', 'setLineDash'],['CanvasRenderingContext2D', 'setTransform'],['CanvasRenderingContext2D', 'stroke'],['CanvasRenderingContext2D', 'strokeText'],['CanvasRenderingContext2D', 'transform'],['CanvasRenderingContext2D', 'translate'],['CanvasRenderingContext2D', 'arc'],['CanvasRenderingContext2D', 'arcTo'],['CanvasRenderingContext2D', 'beginPath'],['CanvasRenderingContext2D', 'bezierCurveTo'],['CanvasRenderingContext2D', 'clearRect'],['CanvasRenderingContext2D', 'closePath'],['CanvasRenderingContext2D', 'ellipse'],['CanvasRenderingContext2D', 'fillRect'],['CanvasRenderingContext2D', 'lineTo'],['CanvasRenderingContext2D', 'moveTo'],['CanvasRenderingContext2D', 'quadraticCurveTo'],['CanvasRenderingContext2D', 'rect'],['CanvasRenderingContext2D', 'resetTransform'],['CanvasRenderingContext2D', 'restore'],['CanvasRenderingContext2D', 'rotate'],['CanvasRenderingContext2D', 'strokeRect'],['CanvasPattern', 'setTransform'],['CanvasGradient', 'addColorStop'],['CanvasCaptureMediaStreamTrack', 'requestFrame'],['CSSTransformComponent', 'toMatrix'],['CSSTransformComponent', 'toString'],['CSSStyleValue', 'toString'],['CSSStyleSheet', 'addRule'],['CSSStyleSheet', 'deleteRule'],['CSSStyleSheet', 'insertRule'],['CSSStyleSheet', 'removeRule'],['CSSStyleSheet', 'replace'],['CSSStyleSheet', 'replaceSync'],['CSSStyleDeclaration', 'getPropertyPriority'],['CSSStyleDeclaration', 'getPropertyValue'],['CSSStyleDeclaration', 'item'],['CSSStyleDeclaration', 'removeProperty'],['CSSStyleDeclaration', 'setProperty'],['CSSRuleList', 'item'],['CSSNumericArray', 'entries'],['CSSNumericArray', 'keys'],['CSSNumericArray', 'values'],['CSSNumericArray', 'forEach'],['CSSKeyframesRule', 'appendRule'],['CSSKeyframesRule', 'deleteRule'],['CSSKeyframesRule', 'findRule'],['CSSGroupingRule', 'deleteRule'],['CSSGroupingRule', 'insertRule'],['BroadcastChannel', 'close'],['BroadcastChannel', 'postMessage'],['Blob', 'arrayBuffer'],['Blob', 'slice'],['Blob', 'stream'],['Blob', 'text'],['BiquadFilterNode', 'getFrequencyResponse'],['BeforeInstallPromptEvent', 'prompt'],['BaseAudioContext', 'createAnalyser'],['BaseAudioContext', 'createBiquadFilter'],['BaseAudioContext', 'createBuffer'],['BaseAudioContext', 'createBufferSource'],['BaseAudioContext', 'createChannelMerger'],['BaseAudioContext', 'createChannelSplitter'],['BaseAudioContext', 'createConstantSource'],['BaseAudioContext', 'createConvolver'],['BaseAudioContext', 'createDelay'],['BaseAudioContext', 'createDynamicsCompressor'],['BaseAudioContext', 'createGain'],['BaseAudioContext', 'createIIRFilter'],['BaseAudioContext', 'createOscillator'],['BaseAudioContext', 'createPanner'],['BaseAudioContext', 'createPeriodicWave'],['BaseAudioContext', 'createScriptProcessor'],['BaseAudioContext', 'createStereoPanner'],['BaseAudioContext', 'createWaveShaper'],['BaseAudioContext', 'decodeAudioData'],['AudioScheduledSourceNode', 'start'],['AudioScheduledSourceNode', 'stop'],['AudioParamMap', 'entries'],['AudioParamMap', 'forEach'],['AudioParamMap', 'get'],['AudioParamMap', 'has'],['AudioParamMap', 'keys'],['AudioParamMap', 'values'],['AudioParam', 'cancelAndHoldAtTime'],['AudioParam', 'cancelScheduledValues'],['AudioParam', 'exponentialRampToValueAtTime'],['AudioParam', 'linearRampToValueAtTime'],['AudioParam', 'setTargetAtTime'],['AudioParam', 'setValueAtTime'],['AudioParam', 'setValueCurveAtTime'],['AudioNode', 'connect'],['AudioNode', 'disconnect'],['AudioListener', 'setOrientation'],['AudioListener', 'setPosition'],['AudioContext', 'close'],['AudioContext', 'createMediaElementSource'],['AudioContext', 'createMediaStreamDestination'],['AudioContext', 'createMediaStreamSource'],['AudioContext', 'getOutputTimestamp'],['AudioContext', 'resume'],['AudioContext', 'suspend'],['AudioBufferSourceNode', 'start'],['AudioBuffer', 'copyFromChannel'],['AudioBuffer', 'copyToChannel'],['AudioBuffer', 'getChannelData'],['AnimationEffect', 'getComputedTiming'],['AnimationEffect', 'getTiming'],['AnimationEffect', 'updateTiming'],['Animation', 'cancel'],['Animation', 'finish'],['Animation', 'pause'],['Animation', 'play'],['Animation', 'reverse'],['Animation', 'updatePlaybackRate'],['Animation', 'commitStyles'],['Animation', 'persist'],['AnalyserNode', 'getByteFrequencyData'],['AnalyserNode', 'getByteTimeDomainData'],['AnalyserNode', 'getFloatFrequencyData'],['AnalyserNode', 'getFloatTimeDomainData'],['AbortController', 'abort'],['AudioData', 'allocationSize'],['AudioData', 'clone'],['AudioData', 'close'],['AudioData', 'copyTo'],['EncodedAudioChunk', 'copyTo'],['EncodedVideoChunk', 'copyTo'],['VideoColorSpace', 'toJSON'],['VideoFrame', 'allocationSize'],['VideoFrame', 'clone'],['VideoFrame', 'close'],['VideoFrame', 'copyTo'],['Profiler', 'stop'],['Scheduling', 'isInputPending'],['BackgroundFetchManager', 'fetch'],['BackgroundFetchManager', 'get'],['BackgroundFetchManager', 'getIds'],['BackgroundFetchRegistration', 'abort'],['BackgroundFetchRegistration', 'match'],['BackgroundFetchRegistration', 'matchAll'],['CustomStateSet', 'add'],['CustomStateSet', 'clear'],['CustomStateSet', 'entries'],['CustomStateSet', 'forEach'],['CustomStateSet', 'has'],['CustomStateSet', 'keys'],['CustomStateSet', 'values'],['DelegatedInkTrailPresenter', 'updateInkTrailStartPoint'],['Ink', 'requestPresenter'],['MediaSession', 'setActionHandler'],['MediaSession', 'setCameraActive'],['MediaSession', 'setMicrophoneActive'],['MediaSession', 'setPositionState'],['MediaSource', 'addSourceBuffer'],['MediaSource', 'clearLiveSeekableRange'],['MediaSource', 'endOfStream'],['MediaSource', 'removeSourceBuffer'],['MediaSource', 'setLiveSeekableRange'],['SourceBuffer', 'abort'],['SourceBuffer', 'appendBuffer'],['SourceBuffer', 'changeType'],['SourceBuffer', 'remove'],['NavigatorUAData', 'getHighEntropyValues'],['NavigatorUAData', 'toJSON'],['Notification', 'close'],['PaymentInstruments', 'clear'],['PaymentInstruments', 'get'],['PaymentInstruments', 'has'],['PaymentInstruments', 'keys'],['PaymentInstruments', 'set'],['PaymentManager', 'enableDelegations'],['PaymentRequestUpdateEvent', 'updateWith'],['PeriodicSyncManager', 'getTags'],['PeriodicSyncManager', 'register'],['PeriodicSyncManager', 'unregister'],['Permissions', 'query'],['PushManager', 'getSubscription'],['PushManager', 'permissionState'],['PushManager', 'subscribe'],['PushSubscription', 'getKey'],['PushSubscription', 'toJSON'],['PushSubscription', 'unsubscribe'],['RemotePlayback', 'cancelWatchAvailability'],['RemotePlayback', 'prompt'],['RemotePlayback', 'watchAvailability'],['Scheduler', 'postTask'],['TaskController', 'setPriority'],['TrustedHTML', 'toJSON'],['TrustedHTML', 'toString'],['TrustedScript', 'toJSON'],['TrustedScript', 'toString'],['TrustedScriptURL', 'toJSON'],['TrustedScriptURL', 'toString'],['TrustedTypePolicy', 'createHTML'],['TrustedTypePolicy', 'createScript'],['TrustedTypePolicy', 'createScriptURL'],['TrustedTypePolicyFactory', 'createPolicy'],['TrustedTypePolicyFactory', 'getAttributeType'],['TrustedTypePolicyFactory', 'getPropertyType'],['TrustedTypePolicyFactory', 'getTypeMapping'],['TrustedTypePolicyFactory', 'isHTML'],['TrustedTypePolicyFactory', 'isScript'],['TrustedTypePolicyFactory', 'isScriptURL'],['XSLTProcessor', 'clearParameters'],['XSLTProcessor', 'getParameter'],['XSLTProcessor', 'importStylesheet'],['XSLTProcessor', 'removeParameter'],['XSLTProcessor', 'reset'],['XSLTProcessor', 'setParameter'],['XSLTProcessor', 'transformToDocument'],['XSLTProcessor', 'transformToFragment'],['webkitSpeechGrammarList', 'addFromString'],['webkitSpeechGrammarList', 'addFromUri'],['webkitSpeechGrammarList', 'item'],['webkitSpeechRecognition', 'abort'],['webkitSpeechRecognition', 'start'],['webkitSpeechRecognition', 'stop']]

function _mk_html(input, clsname, index){
  var div = document.getElementById(clsname)
  div.innerHTML += `
  <label ><input class="${clsname}-e0" type="checkbox" id="${clsname}" data-key="config-hook-all-${clsname}" vilame="${index}">${clsname} 全选/全不选<br /> </label>
  `
  var htmls = []
  var keys = []
  for (var i = 0; i < input.length; i++) {
    var kv = input[i]
    var k = kv[0]
    var v = kv[1]
    if (keys.indexOf(k) == -1){
      keys.push(k)
      htmls.push(`<label style="margin-left: 20px" >${k}<br /> </label>`)
    }
    htmls.push(`<label style="margin-left: 40px; display:block" ><input class="${clsname}-e2" checked=true type="checkbox" data-key="config-hook-${k}-${v}" vilame="${index}">${k} ${v}<br /></label> `)
  }
  div.innerHTML += htmls.join('')
}

_mk_html(getsets_0, 'getsets_0', 0)
_mk_html(funcs_0, 'funcs_0', 0)
_mk_html(getsets_1, 'getsets_1', 1)
_mk_html(funcs_1, 'funcs_1', 1)

document.querySelectorAll("input").forEach(function(v){
  if(!v.dataset.key) return
  chrome.storage.local.get([v.dataset.key], function (result) {
    if (v.type == 'checkbox'){
      v.checked = result[v.dataset.key];
    }
    if (v.type == 'text' || v.type == 'password'){
      v.value = result[v.dataset.key] || '';
    }
  })
  v.addEventListener("change", function (e) {
    if (v.type == 'checkbox'){
      // console.log(e.target.dataset.key, e.target.checked)
      chrome.storage.local.set({
        [e.target.dataset.key]: e.target.checked
      })
      if (e.target.dataset.key == 'config-pac_proxy'){
        if (e.target.checked){
          chrome.storage.local.get(['config-proxy_config'], function(res){
            if (res['config-proxy_config']){
              set_my_proxy(res['config-proxy_config'])
            }
          })
        }else{
          set_my_proxy()
        }
      }
      sub_logger()
    }
    if (v.type == 'text' || v.type == 'password'){
      chrome.storage.local.set({
        [e.target.dataset.key]: e.target.value
      })
    }
  })
})

function changer(name, index, v){
  if (v.target.dataset.key.indexOf('config-hook-all-') === -1){
    chrome.storage.local.set({
      [v.target.dataset.key]: v.target.checked
    })
    return
  }
  var ck = v.target.checked
  var wt = {}
  document.querySelectorAll("input").forEach(function(v){
    if (v.className.indexOf(name) !== -1){
      if (+v.getAttribute('vilame') == index){
        v.checked = ck
        wt[v.dataset.key] = v.checked
      }
    }
  })
  chrome.storage.local.set(wt)
}

document.getElementById('getsets_0').addEventListener("change", changer.bind(null, 'getsets_0', 0))
document.getElementById('funcs_0').addEventListener("change", changer.bind(null, 'funcs_0', 0))
document.getElementById('getsets_1').addEventListener("change", changer.bind(null, 'getsets_1', 1))
document.getElementById('funcs_1').addEventListener("change", changer.bind(null, 'funcs_1', 1))

var fetch_hook = document.getElementById('fetch_hook');
chrome.storage.local.get([fetch_hook.dataset.key], function (result) {
  fetch_hook.value = result[fetch_hook.dataset.key] || '';
})
function change_fetch_hook(v){    console.log('change_fetch_hook')
  chrome.storage.local.set({
    [v.target.dataset.key]: v.target.value
  })
}
fetch_hook.addEventListener("input", change_fetch_hook)
fetch_hook.addEventListener("change", change_fetch_hook)
fetch_hook.addEventListener("blur", change_fetch_hook)
var request_hook = document.getElementById('request_hook')
chrome.storage.local.get([request_hook.dataset.key], function (result) {
  request_hook.value = result[request_hook.dataset.key] || '';
})
function change_request_hook(v){    console.log('change_request_hook')
  chrome.storage.local.set({
    [v.target.dataset.key]: v.target.value
  })
}
request_hook.addEventListener("input", change_request_hook)
request_hook.addEventListener("change", change_request_hook)
request_hook.addEventListener("blur", change_request_hook)
var default_code_dyn_change_request = document.getElementById('default_code_dyn_change_request')
default_code_dyn_change_request.addEventListener('click', function(e){
    request_hook.value = 
`/* 
 * 在固定的函数名字里面编写你需要对特定参数修改的处理方式
 * 请勿修改下面函数的名字，需要的处理在函数内部处理即可
 * change_request 这个函数用于修改 Request 请求中的数据
 *     将修改后的值赋值给 config 就可以修改内容
 */

function change_request(config){
    var { url, method, postData, headers } = config
    var new_url = url
    var new_method = method
    var new_postData = postData
    var new_headers = headers

    // do something in here.
    if (method == 'POST'){
        console.log('new_postData', new_postData)
        config.postData = new_postData
    }
}`
    request_hook.focus()
})

var myinject = document.getElementById('myinject');
chrome.storage.local.get([myinject.dataset.key], function (result) {
  myinject.value = result[myinject.dataset.key] || '';
})
myinject.addEventListener("change", function(v){
  chrome.storage.local.set({
    [v.target.dataset.key]: v.target.value
  })
})
var myinject_2 = document.getElementById('myinject_2');
chrome.storage.local.get([myinject_2.dataset.key], function (result) {
  myinject_2.value = result[myinject_2.dataset.key] || '';
})
myinject_2.addEventListener("change", function(v){
  chrome.storage.local.set({
    [v.target.dataset.key]: v.target.value
  })
})

var get_now = document.getElementById('get_now');
get_now.addEventListener("click", function(){
  var show_now = document.getElementById('show_now')
  show_now.value = +new Date+''
  chrome.storage.local.set({
    [show_now.dataset.key]: show_now.value
  })
})

var cookie_match = document.getElementById('cookie_match');
cookie_match.addEventListener("click", function(){
  var show_now = document.getElementById('show_now')
  show_now.value = +new Date+''
  chrome.storage.local.set({
    [show_now.dataset.key]: show_now.value
  })
})



function clear_mode(func, is_comment){
  var code = /\{([\w\W]*)\}/.exec(func+'')[1]
  if (is_comment){
    code = code.replace(/\/\*\*([\w\W]*?)\*\//, '$1')
  }
  return code.trim()
}

var websocket_js = document.getElementById('websocket_js');
websocket_js.addEventListener("click", function(){
  var code_model = document.getElementById('code_model')
  code_model.value = clear_mode(mk_websocket_js_code)
})

var websocket_py = document.getElementById('websocket_py');
websocket_py.addEventListener("click", function(){
  var code_model = document.getElementById('code_model')
  code_model.value = clear_mode(mk_websocket_py_code, true)
})

var websocket_hook = document.getElementById('websocket_hook');
websocket_hook.addEventListener("click", function(){
  var code_model = document.getElementById('code_model')
  code_model.value = clear_mode(mk_websocket_hook_code)
})

var proxy_js = document.getElementById('proxy_js');
proxy_js.addEventListener("click", function(){
  var code_model = document.getElementById('code_model')
  code_model.value = clear_mode(mk_proxy_code)
})

var code_model = document.getElementById('code_model')
code_model.ondragover = function(e) {
    e.preventDefault();
}
code_model.ondrop = function(e) {
    e.preventDefault();
    var f = e.dataTransfer.files[0];
    var fr = new FileReader();
    fr.readAsDataURL(f);
    fr.onload = function(e) {
        code_model.value = this.result;
    }
}

var my_code_dec = document.getElementById('my_code_dec')
my_code_dec.ondragover = function(e) {
    e.preventDefault();
}
my_code_dec.ondrop = function(e) {
    e.preventDefault();
    var f = e.dataTransfer.files[0];
    var fr = new FileReader();
    fr.readAsText(f);
    fr.onload = function(e) {
        my_code_dec.value = this.result;
    }
}

var add_script_in_all_document = document.getElementById('add_script_in_all_document');
add_script_in_all_document.addEventListener("click", function(){
  debug_tab = true
  chrome.tabs.query({}, function(tabs) {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].url.indexOf("chrome") == 0){
        continue
      }
      attach_tab_debug(tabs[i].id)
    }
  });
})

var cache_tabid_new = {}
var cache_tabid_att = {}
var debug_tab = false
function attach_tab_debug(tabId){
  cache_tabid_new[tabId] = 1
  var tabids = Object.keys(cache_tabid_new)
  for (var i = 0; i < tabids.length; i++) {
    if (cache_tabid_new[tabids[i]] == 1 && !cache_tabid_att[tabids[i]]){
      cache_tabid_att[tabids[i]] = 1
      var currtab = { tabId: +tabids[i] };
      chrome.debugger.attach(currtab, "1.2", function () {
        chrome.debugger.sendCommand(currtab, "Page.enable", function(){});
        chrome.debugger.sendCommand(currtab, "Page.addScriptToEvaluateOnNewDocument", {
          source: myinject_2.value
        }, function(){});
      });
    }
  }
}
function attach_tab_debug_update(tabId, changeInfo, tab) {
  if (tab.url.indexOf('chrome://') == 0) return
  if (!debug_tab) return
  attach_tab_debug(tabId)
}
chrome.tabs.onUpdated.addListener(attach_tab_debug_update); 
chrome.debugger.onDetach.addListener(function(){
  cache_tabid_new = {}
  cache_tabid_att = {} 
  debug_tab = false 
})

var proxy_config = document.getElementById('proxy_config')
proxy_config.placeholder = `// 请在第一行输出你使用的 pac 路径例如： 
// 1: PROXY 127.0.0.1:8888
// 2: HTTPS hk2.link.ac.cn:152;HTTPS fmt1.link.ac.cn:995
`
chrome.storage.local.get([proxy_config.dataset.key], function (result) {
  proxy_config.value = result[proxy_config.dataset.key] || '';
})
function change_proxy_config(v){    console.log('change_proxy_config')
  chrome.storage.local.set({
    [v.target.dataset.key]: v.target.value
  })
}
proxy_config.addEventListener("input", change_proxy_config)
proxy_config.addEventListener("change", change_proxy_config)
proxy_config.addEventListener("blur", change_proxy_config)

var mysec = document.getElementById('my_secret')
var mycode_dec = document.getElementById('my_code_dec')
document.getElementById('myenc').addEventListener('click', function(e){
    try{
        var md5 = CryptoJS.MD5(mysec.value)+''
        var srcs = CryptoJS.enc.Utf8.parse(mycode_dec.value)
        var key = CryptoJS.enc.Utf8.parse(md5.slice(0, 16)); //16位
        var iv = CryptoJS.enc.Utf8.parse(md5.slice(16));
        var encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }).toString()
        mycode_dec.value = encrypted
    }catch(e){
        mycode_dec.value = e
    }
})
document.getElementById('mydec').addEventListener('click', function(e){
    try{
        var md5 = CryptoJS.MD5(mysec.value)+''
        var key = CryptoJS.enc.Utf8.parse(md5.slice(0, 16)); //16位
        var iv = CryptoJS.enc.Utf8.parse(md5.slice(16));
        var decrypted = CryptoJS.AES.decrypt(mycode_dec.value, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8)
        mycode_dec.value = decrypted
    }catch(e){
        mycode_dec.value = e
    }
})

function response_changer_init(idname, titlenames, init_data, callback) {
    var cid = "#" + idname
    var trlast = cid + " tr:last"
    var opindex = titlenames.length
    var title = "<tr>"
    for (var i = 0; i < titlenames.length; i++) {
        title += "<td>" + titlenames[i].split('|')[0] + "</td>"
    }
    title += "<td>操作</td>"
    title += "</tr>"
    title += '<tr><td colspan="5"><button>添加行</button><button>添加示例1(重定向到本地文件)</button><button>添加示例2(直接修改返回值)</button></td></tr>'
    $(cid).html(title)
    $($(trlast).find("button")[0]).click(function() {
        addRow()
    })
    $($(trlast).find("button")[1]).click(function() {
        addRow(["baidu.com", "file:///C:/Users/Administrator/Desktop/test.html", "redirect local."]) // 这里的最后一个值不能随意修改
        __cache_data()
    })
    $($(trlast).find("button")[2]).click(function() {
        addRow(["baidu.com", "console.log(123)", "change return data."]) // 这里的最后一个值不能随意修改
        __cache_data()
    })
    init_data = init_data || []
    for (var i = 0; i < init_data.length; i++) {
        addRow(init_data[i])
    }
    function __cache_data(){
        var data_list = []
        var trs = $(cid).find("tr")
        for (var i = 0; i < trs.length; i++) {
            var tds = $(trs[i]).find("td")
            var data_line = []
            for (var j = 0; j < tds.length; j++) {
                var ipt = $(tds[j]).find("input")[0]
                if (ipt){
                    data_line.push(ipt.value)
                }
            }
            if (data_line.length){
                data_list.push(data_line)
            }
        }
        while(init_data.length){ init_data.pop() }
        while(data_list.length){ init_data.unshift(data_list.pop()) }
        callback(init_data)
    }
    function __add_remover(index){
        $(cid).find("tr").eq(index).find("td").eq(opindex).remove();
        var htmlStr = "<td><button>删除行</button></td>"
        $(cid).find("tr").eq(index).append(htmlStr)
        $(cid).find("tr").eq(index).find("td").find("button").click(function(){
            removeRow(index)
        })
    }
    function __add_changer(index){
        var tds = $(cid).find("tr").eq(index).find("td")
        for (var i = 0; i < tds.length; i++) {
            var ipt = $(tds[i]).find("input")[0]
            if (ipt){
                $(ipt).on("input", function(){
                    __cache_data()
                })
            }
        }
    }
    function addRow(data) {
        var trArray = $(cid).find("tr");
        var thisIndex = trArray.length - 1;
        var addRowHtmlStr = "<tr>"
        for (var i = 0; i < titlenames.length; i++) {
            var [name, style, disabled] = titlenames[i].split('|')
            style = style || 'width: 300px'
            if (disabled == 'true'){
                disabled = 'disabled="disabled" readonly="readonly"'
            }else if (disabled == 'false' || disabled == '' || disabled === undefined){
                disabled = ''
            }else { throw Error('not in "true" or "false" string.') }
            addRowHtmlStr += `<td style='width: 300px'><input type='text' style='${style}' ${disabled}></td>`
        }
        "<td></td></tr>"
        $(trlast).before(addRowHtmlStr);
        __add_changer(thisIndex)
        __add_remover(thisIndex)
        if (data){ 
            var ctds = $(cid).find("tr").eq(thisIndex).find("td")
            var leng = Math.min(data.length, titlenames.length)
            for (var i = 0; i < leng; i++) {
                $(ctds[i]).find('input').val(data[i])
            }
        }
    }
    function removeRow(index) {
        $(cid).find("tr").eq(index).remove();
        var trArrayNow = $(cid).find("tr");
        for (var i = index; i < trArrayNow.length - 1; i++) {
            __add_remover(i)
        }
        __cache_data()
    }
}

chrome.storage.local.get(["response_changer"], function(res){
    var init_data = JSON.parse(res["response_changer"] || "[]")
    localStorage.webRedirect = JSON.stringify(init_data)
    response_changer_init("response_changer", ["(URL)字符串匹配", "重定向地址或修改的字符串", "类型|width:120px|true"], init_data, function(data){
        chrome.storage.local.set({
            response_changer: JSON.stringify(data)
        })
        localStorage.webRedirect = JSON.stringify(data)
    })
})