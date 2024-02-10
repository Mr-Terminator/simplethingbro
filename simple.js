function popupToggle(t)
{
	var a = !1;
	let n;
	const r = t + ' .content[data-tab="settings"] input.hotkey';

	function i(e)
	{
		var o = {
				top: parseFloat($(e).css("top")),
				left: parseFloat($(e).css("left"))
			},
			o = (localStorage.setItem("PersonalDefender.coordinates", JSON
				.stringify(o)), $(e +
				' .content[data-tab="clicker"] .text_input.delay')),
			t = o.val();
		/^\d+$/.test(t) ? (previousValue = t, t = o.map(function()
		{
			return $(this).val()
		}).get(), localStorage.setItem("PersonalDefender.mine_delay",
			JSON.stringify(t))) : o.val(previousValue), $(e.slice(0, e
			.lastIndexOf(" "))).remove(), a = !1, n && (n
			.requestPointerLock = n.requestPointerLock || n
			.mozRequestPointerLock || n.webkitRequestPointerLock, n
			.requestPointerLock) && n.requestPointerLock()
	}
	$(r).on("keydown", function(e)
	{
		e.stopPropagation()
	}), $(document).on("click", t + " .close", function()
	{
		i(t)
	}), $(document).keydown(e =>
	{
		var o = JSON.parse(localStorage.getItem(
				"PersonalDefender.hotkeys")),
			o = (o = o && o.find(function(e)
			{
				return "Open menu" === e.name
			})) ? o.value : "Slash";
		e.code !== o || $(e.target).is(r) || 0 < document
			.querySelectorAll(
				".BattleChatComponentStyle-inputContainerAllies input")
			.length || (e.preventDefault(), a ? i(t) : (createPopup(t),
				initializeTab(t, "clicker"), a = !0, n = document
				.pointerLockElement || document
				.mozPointerLockElement || document
				.webkitPointerLockElement, document
				.exitPointerLock()))
	}), $(window).mousedown(e =>
	{
		var o = t.slice(0, t.lastIndexOf(" "));
		1 === e.which && $(e.target).is($(o)) && i(t)
	})
}

function initializePopup(e)
{
	var o = $(e),
		t = o.outerWidth(),
		a = o.outerHeight(),
		n = $(window).width(),
		r = $(window).height(),
		n = n - t,
		t = r - a;

	function i()
	{
		o.css(
		{
			top: "10em",
			left: "10em"
		})
	}
	localStorage.getItem("PersonalDefender.coordinates") && (r = JSON.parse(
			localStorage.getItem("PersonalDefender.coordinates")), a = r) && !
		isNaN(a.top) && 0 <= a.top && a.top <= t && !isNaN(a.left) && 0 <= a
		.left && a.left <= n ? o.css(
		{
			top: r.top + "px",
			left: r.left + "px"
		}) : i(), $(window).on("beforeunload", function()
		{
			var e = {
				top: parseFloat(o.css("top")),
				left: parseFloat(o.css("left"))
			};
			localStorage.setItem("PersonalDefender.coordinates", JSON
				.stringify(e))
		}), $(e + " .navigation .item").removeAttr("tabindex"), $(e +
			" .navigation .item:not(.active)").attr("tabindex", "0")
}

function popupAppearance(t)
{
	$(document).on("click", function(e)
	{
		var o = $(t + " .checkbox");
		0 < o.length && (o.is(e.target) || o.has(e.target).length || o
			.blur())
	}), $(t + ' .container[data-tab="clicker"] .supplies .supply').click(
		function()
		{
			"off" === $(this).attr("data-state") ? $(this).attr(
				"data-state", "on") : $(this).attr("data-state", "off")
		}), $(document).on("keydown", t, function(e)
	{
		e.stopPropagation()
	})
}

function createPopup(e)
{
	$("body").append(
			'<div class="popup_container personaldefender" author="OrakomoRi"><div class="popup"><button class="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg></button><nav class="navigation"><div class="item" data-tab="clicker"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 225.64v99a64 64 0 01-40.23 59.42l-23.68 9.47A32 32 0 00364.6 417l-10 50.14A16 16 0 01338.88 480H173.12a16 16 0 01-15.69-12.86L147.4 417a32 32 0 00-19.49-23.44l-23.68-9.47A64 64 0 0164 324.67V224c0-105.92 85.77-191.81 191.65-192S448 119.85 448 225.64z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><circle cx="168" cy="280" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><circle cx="344" cy="280" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 336l-16 48h32l-16-48zM256 448v32M208 448v32M304 448v32"/></svg></div><div class="item" data-tab="settings"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg></div></nav><div class="content" data-tab="clicker"><div class="header">Clicker</div><div class="inner"><div class="scrollable"><div class="supplies"><div class="subheader">Chose supplies to click</div><div class="subinner"><svg width="33" height="33" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg" data-key="1" class="supply"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.4995 1.5L20.9995 6V8L24.9995 12H26.9995L31.4995 7.5H32.9995V10C32.9995 15.5228 28.5224 20 22.9995 20C21.5322 20 20.1386 19.684 18.8833 19.1162L6.99993 30.9999C5.61922 32.3807 3.38061 32.3807 1.99989 31C0.61919 29.6193 0.619177 27.3807 1.99985 26L13.8833 14.1162C13.3156 12.8609 12.9995 11.4673 12.9995 10C12.9995 4.47715 17.4767 0 22.9995 0H25.4995V1.5Z"/></svg><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" data-key="2" class="supply"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.3585 20.2617C26.6141 28.9674 16 32 16 32C16 32 2 28 2 16V5.5086C2 4.61564 2.59195 3.83087 3.45056 3.58555L16 0L28.5494 3.58555C29.408 3.83087 30 4.61564 30 5.5086V12V16C30 16 30 16 30 16C30 17.5514 29.766 18.9691 29.3585 20.2617ZM26 10.8571V7.01721L16 4.16006L6 7.01721V16C6 20.2091 8.39074 23.1492 11.325 25.2451C12.7793 26.2839 14.2595 27.0272 15.3882 27.5109C15.609 27.6055 15.814 27.6892 16 27.7624L16 8L26 10.8571Z"/></svg><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" data-key="3" class="supply"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.33333L0 26L20 12L6 32L30.6667 28L20 24L32 0L8 12L4 1.33333Z"/></svg><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" data-key="4" class="supply"><path d="M2 13.8397C2 12.672 2.51025 11.5626 3.39683 10.8027L16 0L28.6032 10.8027C29.4897 11.5626 30 12.672 30 13.8397V20L16 8L2 20V13.8397Z"/><path d="M2 25.8397C2 24.672 2.51025 23.5626 3.39683 22.8027L16 12L28.6032 22.8027C29.4897 23.5626 30 24.672 30 25.8397V32L16 20L2 32V25.8397Z"/></svg></div></div><div class="click_enable"><label class="label"><p>Click supplies</p><input type="checkbox" class="checkbox supplies"></label></div><div class="mine_delay"><label class="label">Delay for mines (ms) <input type="text" class="text_input delay"></label></div></div></div></div><div class="content" data-tab="settings"><div class="header">Settings</div><div class="inner"><div class="scrollable"><div class="hotkeys"><div class="subheader">Hotkeys</div><div class="subinner"><label class="label"><input type="text" class="text_input hotkey" readonly="readonly"><p class="text">Open menu</p></label><label class="label"><input type="text" class="text_input hotkey" readonly="readonly"><p class="text">Click supplies</p></label><label class="label"><input type="text" class="text_input hotkey" readonly="readonly"><p class="text">Click mines</p></label></div></div></div></div></div></div></div>'
			), popupStyles(e), initializePopup(e), popupMove(e), setupHotkeys(
		e), setupSupplyClickCheckbox(e), setupMineDelay(e), setupClickValues(e)
}

function popupStyles(e)
{
	var o = $("<style>").html(
			".popup_container.personaldefender[author=OrakomoRi],.popup_container.personaldefender[author=OrakomoRi] *{margin:0;padding:0;border:none;outline:0;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-family:sans-serif;background:0 0;color:inherit}.popup_container.personaldefender[author=OrakomoRi] button{outline:0;border:none;background:0 0;overflow:visible;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;appearance:none;border-radius:0}.popup_container.personaldefender[author=OrakomoRi] button::-moz-focus-inner{border:0;padding:0}"
			),
		t = $("<style>").html(
			'.popup_container.personaldefender[author=OrakomoRi]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:888;-webkit-box-align:center;-webkit-box-pack:center;display:flex;justify-content:center;align-items:center}.popup_container.personaldefender[author=OrakomoRi] .popup{position:absolute;display:flex;width:30em;height:20em;border-radius:1em;padding:1em 2.5em 1em .5em;gap:2em;background:rgba(var(--orakomori-personaldefender-background),var(--orakomori-personaldefender-opacity));-webkit-backdrop-filter:blur(var(--orakomori-personaldefender-blur));backdrop-filter:blur(var(--orakomori-personaldefender-blur));border:.1em solid rgba(255,255,255,calc(var(--orakomori-personaldefender-opacity) * 1.5));box-shadow:0 0 2em 0 rgba(255,255,255,.2);color:#fff;z-index:889}.popup_container.personaldefender[author=OrakomoRi] .content{display:none;flex-direction:column;align-items:center;gap:1em;flex-grow:1}.popup_container.personaldefender[author=OrakomoRi] .content.active{display:flex}.popup_container.personaldefender[author=OrakomoRi] .close{position:absolute;top:.5em;right:.5em;cursor:pointer;color:#fff;height:2em;width:2em;transition:color var(--orakomori-personaldefender-transition)}.popup_container.personaldefender[author=OrakomoRi] .close:hover{color:#ff4646}.popup_container.personaldefender[author=OrakomoRi] .header{display:flex;align-items:center;justify-content:center;font-size:1.5em;font-weight:700}.popup_container.personaldefender[author=OrakomoRi] .inner{display:flex;flex-direction:column;justify-content:center;gap:1em;flex-grow:1;padding:.5em 1em;overflow:hidden}.popup_container.personaldefender[author=OrakomoRi] .subheader{font-size:1.2em;font-weight:700}.popup_container.personaldefender[author=OrakomoRi] .popup .scrollable{display:flex;flex-direction:column;gap:1em;padding:1em 2em;overflow:hidden auto}.popup_container.personaldefender[author=OrakomoRi] .popup .scrollable::-webkit-scrollbar-track{background:0 0}.popup_container.personaldefender[author=OrakomoRi] .popup .scrollable::-webkit-scrollbar{width:.5em;background:rgba(255,255,255,.2);border-radius:.25em}.popup_container.personaldefender[author=OrakomoRi] .popup .scrollable::-webkit-scrollbar-thumb{background-color:#5a5a5a;border-radius:.25em}.popup_container.personaldefender[author=OrakomoRi] .popup .scrollable::-webkit-scrollbar-thumb:hover{background-color:#787878}.popup_container.personaldefender[author=OrakomoRi] .inner .label{display:flex;align-items:center;gap:.5em}.popup_container.personaldefender[author=OrakomoRi] .text_input{padding:.2em .5em;background-color:rgb(var(--orakomori-personaldefender-background-primary));color:#fff;text-align:center;border:.1em solid rgb(var(--orakomori-personaldefender-accent));font-size:1em;border-radius:.2em;transition:all var(--orakomori-personaldefender-transition)}.popup_container.personaldefender[author=OrakomoRi] .popup .checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;font:inherit;background-color:rgb(var(--orakomori-personaldefender-background-primary));color:rgb(var(--orakomori-personaldefender-background-primary));width:1.2em;height:1.2em;box-shadow:0 0 0 .1em rgb(var(--orakomori-personaldefender-accent));border-radius:.2em;cursor:pointer;display:flex;justify-content:center;align-items:center}.popup_container.personaldefender[author=OrakomoRi] .popup .checkbox::before{content:"";width:.8em;height:.8em;border-radius:.2em;background-color:rgb(var(--orakomori-personaldefender-accent));transform:scale(0);transition:all var(--orakomori-personaldefender-transition)}.popup_container.personaldefender[author=OrakomoRi] .popup .checkbox:checked::before{transform:scale(1)}.popup_container.personaldefender[author=OrakomoRi] .popup .checkbox:focus-visible{box-shadow:0 0 0 .1em rgb(var(--orakomori-personaldefender-accent)),0 0 0 .2em rgb(var(--orakomori-personaldefender-active))}.popup_container.personaldefender[author=OrakomoRi] .popup .checkbox:disabled{box-shadow:0 0 0 .1em #aaa}.popup_container.personaldefender[author=OrakomoRi] .popup .checkbox:checked:disabled::before{background-color:#aaa}.popup_container.personaldefender[author=OrakomoRi] .navigation{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1em}.popup_container.personaldefender[author=OrakomoRi] .navigation .item{border-radius:.2em;padding:.5em;cursor:pointer;width:2.5em;height:2.5em;transition:color var(--orakomori-personaldefender-transition),background-color var(--orakomori-personaldefender-transition)}.popup_container.personaldefender[author=OrakomoRi] .navigation .item:focus,.popup_container.personaldefender[author=OrakomoRi] .navigation .item:hover{color:rgb(var(--orakomori-personaldefender-accent))}.popup_container.personaldefender[author=OrakomoRi] .navigation .item.active{pointer-events:none;background-color:rgba(255,255,255,.25)}.popup_container.personaldefender[author=OrakomoRi] .supplies{display:flex;flex-direction:column;align-items:center;gap:1em;font-size:1em;font-weight:700}.popup_container.personaldefender[author=OrakomoRi] .supplies .subinner{display:flex;gap:1em}.popup_container.personaldefender[author=OrakomoRi] .supplies .supply{width:1.5em;cursor:pointer;fill:rgb(150,150,150);transition:all var(--orakomori-personaldefender-transition)}.popup_container.personaldefender[author=OrakomoRi] .supplies .supply[data-key="1"]:hover{fill:rgb(148,160,89)}.popup_container.personaldefender[author=OrakomoRi] .supplies .supply[data-key="2"]:hover{fill:rgb(163,156,116)}.popup_container.personaldefender[author=OrakomoRi] .supplies .supply[data-key="3"]:hover{fill:rgb(155,67,67)}.popup_container.personaldefender[author=OrakomoRi] .supplies .supply[data-key="4"]:hover{fill:rgb(164,164,72)}.popup_container.personaldefender[author=OrakomoRi] .supplies .supply[data-state=on][data-key="1"]{fill:rgb(191,229,0)}.popup_container.personaldefender[author=OrakomoRi] .supplies .supply[data-state=on][data-key="2"]{fill:rgb(234,220,153)}.popup_container.personaldefender[author=OrakomoRi] .supplies .supply[data-state=on][data-key="3"]{fill:rgb(255,51,51)}.popup_container.personaldefender[author=OrakomoRi] .supplies .supply[data-state=on][data-key="4"]{fill:rgb(255,255,0)}.popup_container.personaldefender[author=OrakomoRi] .click_enable{align-self:center}.popup_container.personaldefender[author=OrakomoRi] .text_input:focus{border-color:rgb(var(--orakomori-personaldefender-active))}.popup_container.personaldefender[author=OrakomoRi] .mine_delay .text_input.delay{width:4em}.popup_container.personaldefender[author=OrakomoRi] .content[data-tab=settings] .subinner{display:flex;flex-direction:column;gap:.5em}.popup_container.personaldefender[author=OrakomoRi] .content[data-tab=settings] .hotkeys{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.5em}.popup_container.personaldefender[author=OrakomoRi] .hotkeys .text_input.hotkey{cursor:pointer;font-weight:700;width:5rem}.popup_container.personaldefender[author=OrakomoRi] .hotkeys .text{font-size:1em}'
			),
		a = $("<style>").html(
			":root{--orakomori-personaldefender-background:0,0,0;--orakomori-personaldefender-opacity:.4;--orakomori-personaldefender-blur:.5em;--orakomori-personaldefender-accent:97,181,255;--orakomori-personaldefender-active:81,221,97;--orakomori-personaldefender-inactive:221,81,81;--orakomori-personaldefender-background-primary:50,50,50;--orakomori-personaldefender-transition:.3s ease}"
			),
		e = e.slice(0, e.lastIndexOf(" "));
	$(e).append(o), $(e).append(t), $(e).append(a)
}

function initializeTab(e, o)
{
	$(e + " .content").removeClass("active"), $(e +
		` .content[data-tab="${o}"]`).addClass("active"), $(e +
		" .navigation .item").removeClass("active"), $(e +
		` .navigation .item[data-tab="${o}"]`).addClass("active"), $(e +
		" .navigation .item").removeAttr("tabindex"), $(e +
		" .navigation .item:not(.active)").attr("tabindex", "0")
}

function chooseTab(t)
{
	$(document).on("click", t + " .navigation .item", function()
	{
		var e = $(this).attr("data-tab");
		initializeTab(t, e)
	}), $(document).on("keydown", t + " .navigation .item", function(e)
	{
		var o;
		"Space" !== e.code && "Enter" !== e.code || (o = $(this).attr(
				"data-tab"), initializeTab(t, o), e
		.preventDefault())
	})
}

function setupMineDelay(o)
{
	function t(e)
	{
		e = $(e + ' .content[data-tab="clicker"] .text_input.delay').map(
			function()
			{
				return $(this).val()
			}).get();
		localStorage.setItem("PersonalDefender.mine_delay", JSON.stringify(e))
	}
	var e, a;
	e = o, (a = JSON.parse(localStorage.getItem(
		"PersonalDefender.mine_delay"))) && Array.isArray(a) ? $(e +
			' .content[data-tab="clicker"] .text_input.delay').each(function(e)
		{
			$(this).val(a[e])
		}) : ($(e + ' .content[data-tab="clicker"] .text_input.delay').val(100),
			t(e));
	const n = o + ' .content[data-tab="clicker"] .text_input.delay',
		r = $(n);
	var i = r.val();
	$(document).click(function(e)
	{
		0 < r.length && ($(e.target).closest(n).length || r.blur())
	}), r.keydown(function(e)
	{
		"Enter" === e.code && $(this).blur()
	}).click(function()
	{
		$(this).focus()
	}).change(function()
	{
		var e = $(this).val();
		/^\d+$/.test(e) ? (i = e, t(o)) : $(this).val(i)
	})
}

function setupHotkeys(a)
{
	function n(e)
	{
		let o = [];
		$(e + ' .content[data-tab="settings"] .hotkeys .hotkey').each(function()
		{
			var e = $(this),
				e = {
					name: e.siblings(".text").text(),
					value: e.attr("data-code")
				};
			o.push(e)
		}), localStorage.setItem("PersonalDefender.hotkeys", JSON.stringify(
			o))
	}
	var r, i;
	r = a, (i = JSON.parse(localStorage.getItem("PersonalDefender.hotkeys"))) &&
		Array.isArray(i) ? $(r +
			' .content[data-tab="settings"] .hotkeys .hotkey').each(function()
		{
			var e = $(this);
			const o = e.siblings(".text").text();
			var t = i && i.find(function(e)
			{
				return e.name === o
			});
			t ? (e.attr("data-code", t.value), e.val(t.value)) :
				"Open menu" === o && (e.attr("data-code", "Slash"), e.val(
					"Slash"), n(r))
		}) : $(r + ' .content[data-tab="settings"] .hotkeys .hotkey').each(
			function()
			{
				var e = $(this);
				"Open menu" === e.siblings(".text").text() && (e.attr(
					"data-code", "Slash"), e.val("Slash"), n(r))
			});
	const o = a + ' .content[data-tab="settings"] .hotkeys .hotkey',
		t = $(o);
	$(document).click(function(e)
	{
		0 < t.length && ($(e.target).closest(o).length || t.blur())
	}), t.click(function()
	{
		$(this).focus()
	}).keydown(function(e)
	{
		var o = $(this),
			t = e.code;
		o.val(t), o.attr("data-code", t), o.blur(), e.preventDefault(),
			n(a)
	})
}

function setupClickValues(t)
{
	function a(e)
	{
		let o = [];
		$(e + " .supplies .supply").each(function()
		{
			var e = {
				key: $(this).attr("data-key"),
				value: $(this).attr("data-state")
			};
			o.push(e)
		}), localStorage.setItem("PersonalDefender.clickValues", JSON
			.stringify(o))
	}
	var e, n;
	$(t + " .supplies .supply").click(function()
	{
		var e = $(this),
			o = e.attr("data-state");
		e.attr("data-state", "on" === o ? "off" : "on"), a(t)
	}), e = t, (n = JSON.parse(localStorage.getItem(
		"PersonalDefender.clickValues"))) && Array.isArray(n) ? $(e +
		" .supplies .supply").each(function()
	{
		var e = $(this),
			o = e.attr("data-key"),
			t = n.find(function(e)
			{
				return e.key === o
			}),
			t = t ? t.value : "off";
		e.attr("data-state", t)
	}) : $(e + " .supplies .supply").each(function()
	{
		$(this).attr("data-state", "off")
	}), a(e)
}

function setupSupplyClickCheckbox(e)
{
	var o = $(e + " .click_enable .checkbox.supplies");
	(e = localStorage.getItem("PersonalDefender.clickSuppliesState")) && o.prop(
		"checked", "true" === e), o.on("change", function()
	{
		localStorage.setItem("PersonalDefender.clickSuppliesState", o
			.prop("checked").toString())
	})
}

function clicker(r)
{
	"use strict";
	let a = [];
	var n = !1,
		t = !1;

	function i(e)
	{
		var o = new KeyboardEvent("keydown",
			{
				bubbles: !0,
				cancelable: !0,
				key: e,
				code: "Digit" + e,
				charCode: e.charCodeAt(0),
				keyCode: e.charCodeAt(0),
				which: e.charCodeAt(0)
			}),
			e = new KeyboardEvent("keyup",
			{
				bubbles: !0,
				cancelable: !0,
				key: e,
				code: "Digit" + e,
				charCode: e.charCodeAt(0),
				keyCode: e.charCodeAt(0),
				which: e.charCodeAt(0)
			});
		document.dispatchEvent(o), document.dispatchEvent(e)
	}

	function l()
	{
		if (n)
		{
			a = [];
			var o, t = JSON.parse(localStorage.getItem(
				"PersonalDefender.clickValues"));
			for (let e = 0; e < t.length; e++) "on" === t[e].value && (o = t[e]
				.key, a.push(o));
			a.forEach((e, o) =>
			{
				i(e)
			}), requestAnimationFrame(() => l())
		}
	}

	function s(e)
	{
		n = !n;
		e = $(e + " .click_enable .checkbox.supplies");
		0 < e.length && e.prop("checked", n), localStorage.setItem(
			"PersonalDefender.clickSuppliesState", n), n && l()
	}

	function p()
	{
		(t = !t) && ! function e()
		{
			var o;
			t && (i("5"), o = JSON.parse(localStorage.getItem(
				"PersonalDefender.mine_delay"))[0], setTimeout(
			function()
			{
				e()
			}, o))
		}()
	}
	$(document).keydown(function(e)
	{
		var o, t = JSON.parse(localStorage.getItem(
			"PersonalDefender.hotkeys"));
		let a, n;
		if (n = t && Array.isArray(t) ? (o = t.find(function(e)
			{
				return "Click supplies" === e.name
			}), a = o ? o.value : null, (o = t.find(function(e)
			{
				return "Click mines" === e.name
			})) ? o.value : null) : a = null, a && e.code === a && !$(e
				.target).is(r +
				' .content[data-tab="settings"] .hotkeys .hotkey'))
		{
			if (0 < document.querySelectorAll(
					".BattleChatComponentStyle-inputContainerAllies input"
					).length) return;
			e.stopPropagation(), e.preventDefault(), s(r)
		}
		if (n && e.code === n && !$(e.target).is(r +
				' .content[data-tab="settings"] .hotkeys .hotkey'))
		{
			if (0 < document.querySelectorAll(
					".BattleChatComponentStyle-inputContainerAllies input"
					).length) return;
			e.stopPropagation(), e.preventDefault(), p()
		}
		"F5" === e.code && location.reload()
	});
	var e = localStorage.getItem("PersonalDefender.clickSuppliesState");
	e && "true" === e && s(r), $(document).on("change", r +
		" .click_enable .checkbox.supplies",
		function()
		{
			s(r)
		})
}

function popupMove(a)
{
	const n = $(a);
	var r = parseFloat(n.css("left")),
		i = parseFloat(n.css("top"));
	let l, s, p, c;

	function o()
	{
		var e, o, t = $(window).width(),
			a = $(window).height();
		f < t || m < a ? void 0 !== l && void 0 !== s && (e = Math.abs(t / f),
			o = Math.abs(a / m), r = l * e, i = s * o) : (e = t - n
			.outerWidth(), o = a - n.outerHeight(), r = Math.min(Math.max(r,
				0), e), i = Math.min(Math.max(i, 0), o)), n.css("top", i +
			"px"), n.css("left", r + "px"), l = r, s = i, f = t, m = a
	}

	function d(e)
	{
		r = e.clientX - p, i = e.clientY - c, o()
	}

	function u()
	{
		$(document).off("mousemove", d), $(document).off("mouseup", u)
	}
	var f = $(window).width(),
		m = $(window).height();
	n.mousedown(function(e)
	{
		var o = !0,
			t = $(e.target);
		(o = t.is("input") || t.is("a") || 0 < t.closest("button")
			.length || 0 < t.closest("label").length || 0 < t.closest(
				a + " .supply").length || 0 < t.closest(a + " .close")
			.length || 0 < t.closest(a + " .navigation .item").length ?
			!1 : o) && (e.preventDefault(), p = e.clientX - n.offset()
			.left, c = e.clientY - n.offset().top, $(document).on(
				"mousemove", d), $(document).on("mouseup", u))
	}), $(window).on("resize", function()
	{
		o()
	})
}
$(document).ready(function()
{
	var e =
		'.popup_container.personaldefender[author="OrakomoRi"] .popup';
	popupToggle(e), popupAppearance(e), chooseTab(e), clicker(e)
});
