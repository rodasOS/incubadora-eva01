const response = await fetch('http://rodasos.vercel.app/src/pages/api/pepe.json');
const data = await response.json();
console.log(data)

export async function GET() {
	return new Response(
		JSON.stringify(data),
	);
}

