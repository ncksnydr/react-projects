import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa6';
import { QRCodeCanvas } from 'qrcode.react';
import '../styles/QrCodeGen.css';

function QrCodeGen() {

	/**
	 *    Variables
	 * -------------------------------------------------- */
	const qrCodeDefaultText = "https://nicksnyder.is";
	const qrCodeSizes:number[] = [
		100,
		200,
		300,
		400,
		500,
		600,
		700,
		800,
		900,
		1000
	];

	/**
	 *    States
	 * -------------------------------------------------- */
	let [qrCodeSize, setQrCodeSize] = useState(qrCodeSizes[0]);
	let [colorForeground, setColorForeground] = useState('#000000');
	let [colorBackground, setColorBackground] = useState('#ffffff');
	let [qrCodeText, setQrCodeText] = useState('');
	let [qrCodeDownloadUrl, setQrCodeDownloadUrl] = useState('#');
	

	/**
	 *    Functions
	 * -------------------------------------------------- */
	
	/**
		*  createQrCodeDownloadUrl
		*  Creates a downloadable data URL from the current canvas.
	 */

	const createQrCodeDownloadUrl = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const canvas = document.querySelector("canvas");
				if (canvas !== null) {
					const downloadUrl = canvas.toDataURL();
					setQrCodeDownloadUrl(downloadUrl);
					resolve(downloadUrl);
				}
			}, 50);
		});
	}

	/**
	 *    Lifecycle
	 * -------------------------------------------------- */
	useEffect(() => {
		createQrCodeDownloadUrl();
	}, [
		qrCodeSize,
		qrCodeText,
		colorBackground,
		colorForeground
	]);

  return (
    <div className="qr-code-gen px-12 py-9 mt-12 mx-auto">
			<h1>QR Code Generator</h1>
			<div className="qr-code-gen-options grid grid-flow-col gap-4 my-12">
				<div>
					<label 
						className="mb-2"
						htmlFor="colorBackground"
					>
						Background
					</label>
					<input 
						id="colorBackground"
						type="color" 
						value={colorBackground}
						onChange={event => setColorBackground(event.target.value)}
					/>
				</div>
				<div>
					<label
						className="mb-2"
						htmlFor="colorForeground"
					>
					Foreground
					</label>
					<input
						id="colorForeground"
						type="color" 
						value={colorForeground}
						onChange={event => setColorForeground(event.target.value)}
					/>
				</div>
				<div>
					<label
						className="mb-2"
						htmlFor="qrSize"
					>
					Size
					</label>
					<select 
						id="qrSize"
						onChange={(event) => { 
							setQrCodeSize(Number(event.target.value));
						}}
					>
						{qrCodeSizes.map((size:number, index:number) =>(
							<option value={size} key={index}>
							{size}
							</option>
						))}
					</select>
				</div>
			</div>

				<input 
					type="text" 
					className="qr-text mb-9" 
					placeholder="Enter QR Text"
					value={qrCodeText}
					onChange={(event) => setQrCodeText(event.target.value)}
				/>

				<QRCodeCanvas 
					id="qr"
					value={(qrCodeText === '') ? qrCodeDefaultText : qrCodeText } 
					size={qrCodeSize}
					bgColor={colorBackground}
					fgColor={colorForeground}
				/>

				<a 
					href={qrCodeDownloadUrl}
					download="QRCode"
					className="primary-btn mt-9 mb-0 mx-auto text-center w-fit"
				>
					<FaDownload />
						Download
				</a>
    </div>
  );
}

export default QrCodeGen;
