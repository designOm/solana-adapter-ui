import React, {useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import {NotificationContext} from "../../Providers/NotificationProvider";
import {
	addError as addE,
	addSuccess as addS,
	addWarning as addW,
	removeError as rmE,
	removeSuccess as rmS,
	removeWarning as rmW,
	selectError,
	selectSuccess,
	selectWarning,
} from "../../redux/features/notification/notificationSlice";

export default function useNotification() {
	const {
		error,
		addError,
		removeError,
		success,
		addSuccess,
		removeSuccess,
		warning,
		addWarning,
		removeWarning,
	} = React.useContext(NotificationContext);
	return {
		error,
		addError,
		removeError,
		success,
		addSuccess,
		removeSuccess,
		warning,
		addWarning,
		removeWarning,
	};
}

export function useReduxNotification() {
	const error = useSelector(selectError);
	const warning = useSelector(selectWarning);
	const success = useSelector(selectSuccess);
	const dispatch = useDispatch();

	const addError = useCallback(
		(message, label, status) => {
			dispatch(addE({message, label, status}));
		},
		[dispatch]
	);
	const addSuccess = useCallback(
		(message, label, status) => {
			dispatch(addW({message, label, status}));
		},
		[dispatch]
	);
	const addWarning = useCallback(
		(message, label, status) => {
			dispatch(addS({message, label, status}));
		},
		[dispatch]
	);
	const removeError = useCallback(() => {
		dispatch(rmE());
	}, [dispatch]);
	const removeSuccess = useCallback(() => {
		dispatch(rmW());
	}, [dispatch]);
	const removeWarning = useCallback(() => {
		dispatch(rmS());
	}, [dispatch]);

	return {
		addError,
		addSuccess,
		addWarning,
		removeError,
		removeSuccess,
		removeWarning,
		error,
		warning,
		success,
	};
}
