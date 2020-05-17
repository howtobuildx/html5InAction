(function() {
	let init = function() {
		let orderForm = document.forms.order,
				saveBtn = document.getElementById('saveorder'),
				saveBtnClicked = false;

		let saveForm = function() {
			if (!('formAction' in document.createElement('input'))) {
				let formAction = saveBtn.getAttribute('formAction');
				orderForm.setAttribute('action', formAction);
			}
			saveBtnClicked = true;
		};

		saveBtn.addEventListener('click', saveForm, false);
	};
	window.addEventListener('load', init, false);
})();