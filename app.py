from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

import uvicorn
app = FastAPI(
    title="tugi",
    description="tugi",
    version="0.1.0",
)

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/")
async def root(request: Request):
    return templates.TemplateResponse("prediction_web.html",{"request": request})
@app.get("/")
async def root(request: Request):
    return templates.TemplateResponse("prediction_web.html",{"request": request})

if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=1234)
