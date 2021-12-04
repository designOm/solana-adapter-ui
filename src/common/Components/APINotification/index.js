import {Alert, AlertTitle, Snackbar, IconButton} from "@mui/material";
import React, {useEffect} from "react";
import CloseIcon from "@mui/icons-material/Close";
import useNotification, {
	useReduxNotification,
} from "../../Hooks/useNotification";

export default function APInotification() {
	const {
		error,
		removeError,
		addError,
		addWarning,
		addSuccess,
		success,
		removeSuccess,
		warning,
		removeWarning,
	} = useNotification();
	const {
		error: e,
		success: s,
		warning: w,
		removeError: rmE,
		removeSuccess: rmS,
		removeWarning: rmW,
	} = useReduxNotification();

	useEffect(() => {
		if (e) addError(e.message ?? "", e.label ?? "", e.status ?? "");
	}, [e, addError]);
	useEffect(() => {
		if (w) addWarning(w.message ?? "", w.label ?? "", w.status ?? "");
	}, [w, addWarning]);
	useEffect(() => {
		if (s) addSuccess(s.message ?? "", s.label ?? "", s.status ?? "");
	}, [s, addSuccess]);
	return (
		<>
			{error && error.message && (
				<Snackbar
					open={!!error}
					autoHideDuration={3000}
					anchorOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					onClose={() => removeError()}>
					<Alert
						action={
							<IconButton
								aria-label="close"
								color="inherit"
								size="small"
								onClick={() => {
									removeError();
									if (e) rmE();
								}}>
								<CloseIcon fontSize="inherit" />
							</IconButton>
						}
						sx={{width: "100%"}}
						severity="error"
						elevation={2}>
						<AlertTitle>Error: {error.label ?? ""}</AlertTitle>
						{error.message}
					</Alert>
				</Snackbar>
			)}
			{warning && warning.message && (
				<Snackbar
					open={!!warning}
					autoHideDuration={3000}
					onClose={() => removeWarning()}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}>
					<Alert
						action={
							<IconButton
								aria-label="close"
								color="inherit"
								size="small"
								onClick={() => {
									removeWarning();
									if (w) rmW();
								}}>
								<CloseIcon fontSize="inherit" />
							</IconButton>
						}
						sx={{width: "100%"}}
						severity="warning"
						elevation={2}>
						<AlertTitle>Warning:{warning.label ?? ""}</AlertTitle>
						{warning.message}
					</Alert>
				</Snackbar>
			)}
			{success && success.message && (
				<Snackbar
					open={!!success}
					autoHideDuration={3000}
					onClose={() => removeSuccess()}
					anchorOrigin={{
						vertical: "top",
						horizontal: "center",
					}}>
					<Alert
						action={
							<IconButton
								aria-label="close"
								color="inherit"
								size="small"
								onClick={() => {
									removeSuccess();
									if (s) rmS();
								}}>
								<CloseIcon fontSize="inherit" />
							</IconButton>
						}
						sx={{width: "100%"}}
						severity="success"
						elevation={2}>
						<AlertTitle>Success: {success.label ?? ""}</AlertTitle>
						{success.message}
					</Alert>
				</Snackbar>
			)}
		</>
	);
}
