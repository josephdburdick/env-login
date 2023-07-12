import { NextResponse } from "next/server"
export async function POST(request: Request, response: Response) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData.entries())

  if (data.password === process.env.LOGIN_PASSWORD) {
    return NextResponse.json({ success: true }, { status: 200 })
  } else {
    return NextResponse.json({ success: false }, { status: 401 })
  }
}
