export interface ApiError { code: string; message: string; requestId?: string; }
export interface ApiResult<T> { data: T | null; error: ApiError | null; }

/** Cliente HTTP versionado. Conectar ao gateway/API quando os contratos forem implementados. */
export class CavernaApiClient {
  constructor(private readonly baseUrl: string, private readonly getAccessToken: () => Promise<string | null>) {}
  async get<T>(path: string): Promise<ApiResult<T>> {
    const token = await this.getAccessToken();
    const response = await fetch(`${this.baseUrl.replace(/\/$/, '')}/api/v1${path}`, {
      headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}), Accept: 'application/json' },
    });
    const body = await response.json().catch(() => null);
    if (!response.ok) return { data: null, error: body?.error ?? { code: 'HTTP_ERROR', message: `HTTP ${response.status}` } };
    return { data: body?.data ?? body, error: null };
  }
}
