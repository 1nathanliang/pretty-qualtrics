function observeLabels() {
    // Select all label elements for horizontal and vertical questions
    const labelsH = document.querySelectorAll('td.LabelContainer label.q-radio');
    // const labelsV = document.querySelectorAll('li.Selection span.LabelWrapper label');

    // Callback for horizontal question mutations
    const callbackH = function (mutationsList, observer) {
        mutationsList.forEach(mutation => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const targetLabelH = mutation.target;
                const parentContainerH = targetLabelH.closest('td.LabelContainer');

                if (targetLabelH.classList.contains('q-checked')) {
                    // Styles for checked state
                    targetLabelH.style.border = '0';
                    parentContainerH.style.backgroundColor = '#DEECFA';
                    parentContainerH.classList.add('q-radio-checked');
                    targetLabelH.innerHTML = `<svg aria-hidden="true" data-icontype="Check" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.8062 7.37181C18.0841 7.67897 18.0603 8.15325 17.7532 8.43115L9.8782 15.5562C9.59605 15.8114 9.16747 15.815 8.88113 15.5644L5.88113 12.9394C5.5694 12.6667 5.53782 12.1928 5.81058 11.8811C6.08334 11.5694 6.55716 11.5378 6.86889 11.8106L9.36667 13.9961L16.7468 7.31885C17.054 7.04094 17.5283 7.06466 17.8062 7.37181Z"></path></svg>`;
                    if (targetLabelH.classList.contains('q-focused')) {
                        parentContainerH.style.border = '2.5px solid #0B6ED0';
                    } else {
                        parentContainerH.style.border = '0';
                    }
                } else {
                    // Reset styles for unchecked state
                    parentContainerH.style.backgroundColor = 'transparent';
                    parentContainerH.style.border = '0';
                    targetLabelH.innerHTML = '';
                }
            }
        });
    };

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, attributeFilter: ['class'] };

    // Create MutationObserver instances and pass the corresponding callback function to each
    const observerH = new MutationObserver(callbackH);

    // Start observing each label for configured mutations
    labelsH.forEach(label => observerH.observe(label, config));

}

// Call the function to start observing
observeLabels();