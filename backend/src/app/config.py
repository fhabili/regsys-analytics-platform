from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    # Database
    database_url: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/liquidity_risk"

    # App
    app_name: str = "Liquidity Risk Reporting System"
    debug: bool = False

    # AI
    anthropic_api_key: str = ""
    gemini_api_key: str = ""
    groq_api_key: str = ""
    groq_model: str = "llama3-8b-8192"
    groq_fallback_models: str = "llama-3.1-8b-instant,llama3-8b-8192"


settings = Settings()
