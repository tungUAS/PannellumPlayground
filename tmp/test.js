
const chatbotFrontendURL = 'https://hs-reutlingen-hochschulberater.eu-de.mybluemix.net';
const iframeBlock = document.getElementById('iframe_block');
const iframe = document.getElementById('iframe');
const browserOpenButton = document.getElementById('browserOpenButton');
const mobileOpenButton = document.getElementById('mobileOpenButton');
const mobileDeviceDetected = _detectIfMobileDevice();
const mobileDeviceUser = mobileDeviceDetected;
let pcBrowserChatWindowSize = '';
let openButton;
window.addEventListener('message', processMessageListener);
window.addEventListener('resize', setPcBrowserChatWindowListener);

if (mobileDeviceUser) {
	// On mobile devices we hide PC Browser Open Button. 
	// On mobile devices we always take the full-screen! 
	openButton = mobileOpenButton;
	browserOpenButton.style.display = 'none';
} else {
	// On PC browsers we hide Mobile Device Open Button. 
	openButton = browserOpenButton;
	pcBrowserChatWindowSize = 'normal';
	mobileOpenButton.style.display = 'none';
}

function openChatWindow() {
	selectIFrameEmbedding();
	setOpenButtonVisibility('hidden');
	if (mobileDeviceUser) { setMobileDeviceChatWindow(); }
	if (!mobileDeviceUser) { setPcBrowserChatWindow(); }
	setChatWindowVisibility('visible');
}

function setPcBrowserChatWindow() {
	if (pcBrowserChatWindowSize === 'normal') { normalizePcBrowserChatWindow(); }
	if (pcBrowserChatWindowSize === 'maximal') { maximizePcBrowserChatWindow(); }
}

function setPcBrowserChatWindowListener() {
	if (pcBrowserChatWindowSize === 'normal') { normalizePcBrowserChatWindow(); }
}

function processMessageListener(event) {
	if (event.origin !== chatbotFrontendURL) {
		throw new Error('Recevied Event from invalid domain!');
		return;
	} else if (event.data === 'minimize_requested' && mobileDeviceUser) {
		minimizeChatWindow();
		return;
	} else if (event.data === 'minimize_requested' && !mobileDeviceUser) {
		pcBrowserChatWindowSize = 'normal';
		minimizeChatWindow();
		return;
	} else if (event.data === 'max_size_requested' && !mobileDeviceUser) {
		pcBrowserChatWindowSize = 'maximal';
		setPcBrowserChatWindow();
		return;
	} else if (event.data === 'norm_size_requested' && !mobileDeviceUser) {
		pcBrowserChatWindowSize = 'normal';
		setPcBrowserChatWindow();
		return;
	}
	return;
}

function selectIFrameEmbedding() {
	if (iframe.getAttribute('src') == 'about:blank') {
		iframe.setAttribute('src', chatbotFrontendURL);
	}
}

function setOpenButtonVisibility(visibility) {
	openButton.style.visibility = visibility;
}

function setMobileDeviceChatWindow() {
	selectIFrameEmbedding();
	toggleChatWindow();
	setChatWindowWidthHeight('100vw', '85vh');
}

function minimizeChatWindow() {
	selectIFrameEmbedding();
	unToggleChatWindow();
	setChatWindowVisibility('hidden');
	setOpenButtonVisibility('visible');
}

function maximizePcBrowserChatWindow() {
	selectIFrameEmbedding();
	toggleChatWindow();
	if (_webPageHeight() > _getCurrentBrowserHeight()) {
		// if web page height > current browser height, there will be a "17px" scroll-bar. 
		setChatWindowWidthHeight('calc(100vw - 17px)', '100vh');
	} else if (_webPageHeight() <= _getCurrentBrowserHeight()) {
		setChatWindowWidthHeight('100vw', '100vh');
	}
}

function normalizePcBrowserChatWindow() {
	if (_getCurrentBrowserHeight() > 800) {
		unToggleChatWindow();
		setChatWindowWidthHeight('675px', '800px');
		return;
	} else if (_getCurrentBrowserHeight() <= 800) {
		toggleChatWindow();
		setChatWindowWidthHeight('675px', '100vh');
		return;
	}
}

function setChatWindowWidthHeight(delta_x, delta_y) {
	iframeBlock.style.width = delta_x;
	iframeBlock.style.height = delta_y;
}

function setChatWindowVisibility(visibility) {
	iframeBlock.style.visibility = visibility;
	iframe.style.visibility = visibility;
}

function toggleChatWindow() {
	iframeBlock.classList.remove('chatbot');
	iframeBlock.classList.add('chatbot-2');
	iframe.classList.remove('chat-window');
	iframe.classList.add('chat-window-2');
}

function unToggleChatWindow() {
	iframeBlock.classList.remove('chatbot-2');
	iframeBlock.classList.add('chatbot');
	iframe.classList.remove('chat-window-2');
	iframe.classList.add('chat-window');
}

function _detectIfMobileDevice() {
	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
		return true;
	}
	return false;
}

function _getCurrentBrowserHeight() {
	var docElemProp = window.document.documentElement.clientHeight,
		body = window.document.body;
	return window.document.compatMode === 'CSS1Compat' && docElemProp || body && body.clientWidth || docElemProp;
}

function _webPageHeight() {
	return document.body.clientHeight;
}

