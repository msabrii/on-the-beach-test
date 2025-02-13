// import mockData from "../../mocks/holidays.json";

export async function GET() {
  // The endpoint seems to be protected by a capthca service which sometimes seems to block requests
  // This is a mock response to be used in case the real endpoint is not reachable

  try {
    const res = await fetch(
      "https://static.onthebeach.co.uk/fe-code-test/data.json"
    );
    const data = await res.json();
    return Response.json(data, { status: res.status });
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
