# Import the Azure module
Import-Module Az

# Define parameters
param (
    [string]$storageAccountName,
    [string]$resourceGroupName,
    [string]$location = "East US",
    [string]$sku = "Standard_LRS"
)

# Login to Azure
Connect-AzAccount

# Check if the resource group exists
$resourceGroup = Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue

if (-not $resourceGroup) {
    # Create the resource group if it doesn't exist
    New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create the storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName $sku `
                     -Kind StorageV2

Write-Output "Storage account '$storageAccountName' created successfully in resource group '$resourceGroupName' at location '$location' with SKU '$sku'."