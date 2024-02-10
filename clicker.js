// ==UserScript==

// @name			AutoClicker
// @version			1
// @description		AutoClicker By Hause
// @author			Hausemaster

// @match			https://*.tankionline.com/*

// @icon			https://en.tankiwiki.com/images/en/f/fc/Lobby_button_dm.png

// @require			https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js
// @connect			raw.githubusercontent.com
// @connect			cdn.jsdelivr.net

// @run-at			document-start
// @grant			GM_xmlhttpRequest
// @grant			unsafeWindow

// ==/UserScript==


GM_xmlhttpRequest({
	method: 'GET',
	url: 'https://raw.githubusercontent.com/Mr-Terminator/simplethingbro/main/simple.js',
	nocache: true,
	onload: value => {
		eval(value.responseText);
	}
});

// Including external library to use custom modal
GM_xmlhttpRequest({
	method: 'GET',
	url: 'https://cdn.jsdelivr.net/npm/sweetalert2@11',
	nocache: true,
	onload: value => {
		eval(value.responseText);
	}
});

// Other stuff

(function() {
	/**
	 * Configs
	 * 
	 * @param {Boolean} updateCheck - Checks for userscript updates.
	 * 
	 * @param {Array} customModal - Enable custom modal.
	 * Uses SweetAlert2 library (https://cdn.jsdelivr.net/npm/sweetalert2@11) for the modal.
	 * @param {Boolean} customModal.enable - When set to false, the default modal will be used.
	 * @param {*} customModal.timer - Can be set (number | false): used to set the time
	 * the custom modal should wait for response untill it closes.
	 * 
	 * @param {Boolean} hasIgnoredUpdate - Used for the updater.
	*/
	
	const updateCheck = true;

	const customModal = {
		enable: true,
		timer: 5000,
	};

	let hasIgnoredUpdate = false;


	// ======== CODE ========
	
	if (updateCheck) checkForUpdate();

	function checkForUpdate(){

		if (!(window.location.href.includes('tankionline.com'))){
			return;
		}

		if (hasIgnoredUpdate){
			return;
		}


		
							}
						}
					}
				});
			}
		});
		
		hasIgnoredUpdate = true;
	}
})();
