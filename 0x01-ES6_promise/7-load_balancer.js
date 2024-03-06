export default function loadBalancer(chainDownload, USDownload) {
	return Promise.race([chainDownload, USDownload]);
}
