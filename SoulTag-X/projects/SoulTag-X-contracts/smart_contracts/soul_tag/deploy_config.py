from algokit_utils.config import (
    DeploymentConfig,
    Network,
    AppDeploymentMode,
)

config = DeploymentConfig(
    app_name="SoulTagX",
    deployer_address=None,  # Will use first available account
    network=Network.TESTNET,  # Or LOCALNET if testing locally
    mode=AppDeploymentMode.AUTO,
)
