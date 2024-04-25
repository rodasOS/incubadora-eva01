const response = await fetch('http://incubadora-eva01.vercel.app//src/pages/api/pepe.json');
const data = await response.json();
console.log(data)

export async function GET() {
	return new Response(
		JSON.stringify(data),
	);
}

