import data from './pepe.json'
// const response = await fetch('http://localhost:4321/src/pages/api/pepe.json');
// const data = await response.json();
interface User {
	author: string;
	body: string;
}

// const res = await fetch('./pepe.json');
// if (res.headers.get('content-type')?.includes('application/json')) {
// 	let data = await res.json();
// 	// Utiliza los datos aquí
// } else {
// 	console.error('No se recibió una respuesta JSON');
// }

export async function GET() {
	return new Response(
		JSON.stringify(data),
	);
}
