import { ReactNode } from 'react';
import '../styles/tailwind.css';

type RootLayoutProps = {
	children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<head />
			<body>{children}</body>
		</html>
	);
}
