/** @jsxImportSource theme-ui */
import React from 'react';

const getFirstAndLastCharacter = (name: string) => {
	return name.split(' ').map(el => el[0].toUpperCase());
};

const Avatar: React.FC<{
	size?: string;
	minWidth?: string;
	minHeight?: string;
	name?: string;
	src?: string;
	bgColor?: string;
}> = ({ size = '32px', src, name, minWidth = '32px', minHeight = '32px' }) => {
	return (
		<li
			sx={{
				listStyle: 'none',
				borderRadius: '50%',
				overflow: 'hidden',
				width: size,
				height: size,
				minWidth: minWidth,
				minHeight: minHeight,
			}}>
			<span
				sx={{
					position: 'relative',
					width: '100%',
					height: '100%',
					display: 'block',
				}}>
				<div
					role='img'
					sx={{
						position: 'absolute',
						top: '0',
						left: '0',
						width: '100%',
						height: '100%',
						backgroundColor: 'primary',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: -1,
					}}>
					{name && getFirstAndLastCharacter(name!)}
				</div>

				{src && (
					<img
						src={src}
						alt={name}
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							zIndex: 1,
						}}
					/>
				)}

				{!src && !name && (
					<img
						src='https://cdn.auth0.com/website/cosmos/avatar-user-default.svg'
						alt={name}
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							zIndex: 1,
						}}
					/>
				)}
			</span>
		</li>
	);
};

export { Avatar };
