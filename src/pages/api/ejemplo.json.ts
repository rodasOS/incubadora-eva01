import data from '../../../public/pepe.json'
// const response = await fetch('http://localhost:4321/src/pages/api/pepe.json');
// const data = await response.json();
console.log('------------------->>>>> \n')
// console.log(data);
interface User {
	author: string;
	body: string;
}

export async function GET() {
	return new Response(
		 JSON.stringify(data),
	);
}
