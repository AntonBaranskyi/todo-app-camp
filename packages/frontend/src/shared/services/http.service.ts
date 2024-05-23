import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class HttpSerivce {
	baseUrl: string;
	fetchingService: AxiosInstance;
	apiVersion: string;
	constructor(
		baseUrl = process.env.SERVER_URL || 'http://localhost:3030',
		fetchingService = axios,
		apiVersion = 'api',
	) {
		this.baseUrl = baseUrl;
		this.fetchingService = axios;
		this.apiVersion = apiVersion;
	}

	private getFullApiUrl(url): string {
		return `${this.baseUrl}/${this.apiVersion}/${url}`;
	}

	private populateTokenToHeaderConfig(): object {
		return {
			Authorization: localStorage.getItem('token'),
		};
	}

	private extractUrlAndDataFromConfig({
		data,
		url,
		...configWithoutDataAndUrl
	}): AxiosRequestConfig {
		return configWithoutDataAndUrl;
	}

	get(config, withAuth = true): Promise<AxiosResponse> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.get(
			this.getFullApiUrl(config.url),
			this.extractUrlAndDataFromConfig(config),
		);
	}

	public async put(config, withAuth = true): Promise<AxiosResponse> {
		try {
			if (withAuth) {
				config.headers = {
					...config.headers,
					...this.populateTokenToHeaderConfig(),
				};
			}

			const res = await this.fetchingService.put(
				this.getFullApiUrl(config.url),
				config.data,
				this.extractUrlAndDataFromConfig(config),
			);

			return res;
		} catch (e) {
			throw new Error(
				`We caught an error sending PUT request. Error: ${e}`,
			);
		}
	}

	public async delete(config, withAuth = true): Promise<AxiosResponse> {
		try {
			if (withAuth) {
				config.headers = {
					...config.headers,
					...this.populateTokenToHeaderConfig(),
				};
			}

			const res = await this.fetchingService.delete(
				this.getFullApiUrl(config.url),
				this.extractUrlAndDataFromConfig(config),
			);

			return res;
		} catch (e) {
			throw new Error(
				`We caught an error sending DELETE request. Error: ${e}`,
			);
		}
	}

	public async patch(config, withAuth = true): Promise<AxiosResponse> {
		try {
			if (withAuth) {
				config.headers = {
					...config.headers,
					...this.populateTokenToHeaderConfig(),
				};
			}

			const res = await this.fetchingService.patch(
				this.getFullApiUrl(config.url),
				config.data,
				this.extractUrlAndDataFromConfig(config),
			);

			return res;
		} catch (e) {
			throw new Error(
				`We caught an error sending PATCH request. Error: ${e}`,
			);
		}
	}

	public async post(config, withAuth = true): Promise<AxiosResponse> {
		try {
			if (withAuth) {
				config.headers = {
					...config.headers,
					...this.populateTokenToHeaderConfig(),
				};
			}

			const res = await this.fetchingService.post(
				this.getFullApiUrl(config.url),
				config.data,
				this.extractUrlAndDataFromConfig(config),
			);

			return res;
		} catch (e) {
			throw new Error(
				`We caught an error sending POST request. Error: ${e}`,
			);
		}
	}
}

export default HttpSerivce;
