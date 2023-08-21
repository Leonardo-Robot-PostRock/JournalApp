import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
	const [formState, setFormState] = useState(initialForm);
	const [formValidation, setFormValidation] = useState({});

	useEffect(() => {
		createValidators();
	}, [formState]);

	const isFormValid = useMemo(() => {
		for (const formValue of Object.keys(formValidation)) {
			if (formValidation[formValue] !== null) return false;
		}
		return true;
	}, [formValidation]);

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const onResetForm = () => {
		setFormState(initialForm);
	};

	const createValidators = () => {
		const formCheckedValues = {};

		// Obtiene la función de validación y el mensaje de error correspondiente del objeto formValidations para el campo actual
		for (const formField of Object.keys(formValidations)) {
			const [fn, errorMessage] = formValidations[formField];

			// Evalúa la función de validación (fn) en el valor actual del campo en formState
			// Si la función devuelve verdadero, el campo se considera válido y se asigna "null" a la propiedad `${formField}Valid` en formCheckedValues.
			// Si la función devuelve falso, el campo se considera inválido y se asigna el mensaje de error a la propiedad `${formField}Valid` en formCheckedValues.
			formCheckedValues[`${formField}Valid`] = fn(formState[formField])
				? null
				: errorMessage;

			// Actualiza el estado de validación del formulario con las últimas validaciones realizadas
			setFormValidation(formCheckedValues);
		}
	};

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
		...formValidation,
		isFormValid,
	};
};
