import React from 'react'
import './Logo.css'

export default ({ isNegative }) => (
  <svg
    viewBox="0 0 224 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="Logo"
  >
    <path
      d="M1.78075 56.9974C1.02122 56.8176 0.507418 56.4355 0.239348 55.8511C0.0159566 55.3117 -0.0510609 54.6599 0.0382957 53.8957C0.172331 52.5022 0.529757 51.1985 1.11058 49.9848C1.73607 48.816 2.4956 47.7147 3.38917 46.6808C4.28274 45.6469 5.288 44.7029 6.40496 43.8488C7.52191 43.0396 8.63887 42.3204 9.75583 41.691C10.56 38.5893 11.3866 35.3078 12.2355 31.8464C13.0844 28.3401 13.8662 24.8563 14.5811 21.3949C15.3406 17.8886 15.9438 14.5396 16.3906 11.348C16.882 8.11141 17.2087 4.37903 17.1278 2.64966C17.0468 0.9203 17 0 17.5 1.52588e-05C18 3.05177e-05 18.3341 1.84052 18.3341 1.84052C18.3341 1.84052 18.5 4.5 18.4011 6.49312C18.3022 8.48623 18.0213 10.5613 17.6639 12.8989C17.3511 15.1914 16.949 17.6189 16.4576 20.1812C15.9661 22.6985 15.4523 25.1934 14.9162 27.6658C14.4247 30.0932 13.9109 32.4083 13.3748 34.611C12.8833 36.7687 12.4365 38.6343 12.0344 40.2076C15.5193 38.7691 19.1383 37.6228 22.8913 36.7687C26.6889 35.8697 30.4196 35.4202 34.0832 35.4202C36.8086 35.4202 39.3999 35.6899 41.8572 36.2293C42.3487 36.3642 42.9295 36.5215 43.5997 36.7013C44.2698 36.8811 44.7836 37.1284 45.1411 37.443C45.3645 37.6228 45.4315 37.8026 45.3421 37.9824C45.2528 38.1173 45.0964 38.1847 44.873 38.1847H44.739C43.0859 37.5104 41.3211 37.0834 39.4446 36.9036C37.6128 36.6788 35.8033 36.5664 34.0162 36.5664C30.2185 36.5664 26.3538 37.0384 22.4221 37.9824C18.5351 38.8815 14.8938 40.275 11.4983 42.163C11.1409 43.3318 10.6494 44.7703 10.0239 46.4785C9.44308 48.1867 8.75057 49.8275 7.94636 51.4008C7.14215 52.9742 6.2039 54.3003 5.13162 55.3791C4.10402 56.5029 2.98706 57.0424 1.78075 56.9974ZM9.21969 43.579C8.23677 44.2084 7.2315 44.9726 6.2039 45.8716C5.22098 46.8156 4.34975 47.8046 3.59022 48.8385C2.87537 49.8724 2.31689 50.9063 1.91479 51.9402C1.51268 53.0191 1.37865 53.9856 1.51268 54.8397C1.64672 55.3342 1.89245 55.5814 2.24987 55.5814C2.33923 55.5814 2.47326 55.5365 2.65198 55.4465C3.54554 54.997 4.30507 54.3227 4.93057 53.4237C5.60075 52.5246 6.18156 51.5132 6.67303 50.3894C7.16449 49.3105 7.61127 48.1642 8.01338 46.9505C8.41548 45.7817 8.81758 44.6579 9.21969 43.579Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M41.4284 21.7995C41.071 22.7435 40.7135 23.8448 40.3561 25.1035C40.0434 26.3622 39.7976 27.6433 39.6189 28.947C39.4849 30.2056 39.4625 31.3969 39.5519 32.5207C39.6859 33.6445 40.021 34.5436 40.5572 35.2179C40.6465 35.3078 40.7359 35.3527 40.8252 35.3527C40.9146 35.3527 40.9816 35.3302 41.0263 35.2853C41.3837 34.9257 41.7635 34.3862 42.1656 33.667C42.5677 32.9478 42.9698 32.1386 43.3719 31.2395C43.8187 30.2955 44.2655 29.3291 44.7122 28.3401C45.2037 27.3511 45.6505 26.4296 46.0526 25.5755C46.0973 25.5306 46.1643 25.4182 46.2537 25.2384C46.343 25.0136 46.4324 24.7888 46.5217 24.5641L46.9908 23.6201C47.3483 23.71 47.5493 23.8224 47.594 23.9572C47.6834 24.0471 47.6834 24.182 47.594 24.3618C47.5493 24.4966 47.46 24.6989 47.3259 24.9686C47.2366 25.2384 47.1249 25.5306 46.9908 25.8452C46.8568 26.1149 46.7228 26.3847 46.5887 26.6544C46.4994 26.9241 46.4324 27.1039 46.3877 27.1938C46.1643 27.6883 45.8516 28.385 45.4494 29.2841C45.0473 30.1382 44.6229 31.0148 44.1761 31.9138C43.774 32.8129 43.3272 33.667 42.8358 34.4761C42.389 35.2403 41.9869 35.7798 41.6294 36.0944C41.4061 36.2742 41.1603 36.3642 40.8923 36.3642C40.5795 36.3642 40.2444 36.1843 39.887 35.8247C39.1721 35.0156 38.703 34.0491 38.4796 32.9253C38.3009 31.8015 38.2786 30.6327 38.4126 29.419C38.5466 28.2052 38.77 26.969 39.0828 25.7104C39.4402 24.4517 39.7753 23.2829 40.088 22.2041C39.5966 22.3839 39.0604 22.6536 38.4796 23.0132C37.8988 23.3279 37.2733 23.4852 36.6031 23.4852C36.1117 23.4852 35.6872 23.3953 35.3298 23.2155C34.7043 23.8898 34.0341 24.4966 33.3193 25.0361C32.6044 25.5755 31.8226 26.025 30.9737 26.3847C30.7503 26.4746 30.6162 26.6544 30.5716 26.9241C30.3482 27.6883 30.0801 28.5873 29.7674 29.6212C29.4993 30.6102 29.0748 31.3519 28.494 31.8464C28.3153 32.0262 28.0696 32.1161 27.7568 32.1161C27.176 32.1161 26.7516 31.8015 26.4835 31.1721C26.2601 30.6776 26.1261 30.0708 26.0814 29.3515C26.0814 28.6323 26.1261 27.8681 26.2154 27.0589C26.2154 26.969 26.1931 26.9241 26.1484 26.9241C25.4336 26.4296 25.0761 25.6879 25.0761 24.6989C25.0761 24.2045 25.1655 23.5751 25.3442 22.8109C25.5229 22.0467 25.7686 21.3275 26.0814 20.6532C26.4388 19.934 26.8633 19.3271 27.3547 18.8326C27.8462 18.2932 28.3823 18.0235 28.9631 18.0235C29.5886 18.0235 30.1024 18.3606 30.5045 19.0349C30.9513 19.889 31.1524 20.8555 31.1077 21.9343C31.063 23.0132 30.9737 24.0246 30.8396 24.9686C31.1077 24.8338 31.4205 24.654 31.7779 24.4292C32.1353 24.2045 32.4927 23.9572 32.8502 23.6875C33.2076 23.4178 33.5203 23.1705 33.7884 22.9458C34.1011 22.6761 34.3245 22.4513 34.4586 22.2715C34.3245 21.7321 34.2352 21.1027 34.1905 20.3835C34.1905 19.6193 34.2352 18.8776 34.3245 18.1583C34.4586 17.3941 34.6596 16.6974 34.9277 16.068C35.2404 15.3937 35.6872 14.8993 36.2681 14.5846C36.4021 14.4947 36.5808 14.4497 36.8042 14.4497C37.1616 14.4497 37.452 14.652 37.6754 15.0566C37.8988 15.4162 38.0105 15.7983 38.0105 16.2029C38.0105 17.2368 37.8541 18.2707 37.5414 19.3046C37.2286 20.2936 36.7595 21.2376 36.134 22.1366C36.3127 22.2265 36.4468 22.2715 36.5361 22.2715C36.8042 22.2715 37.0946 22.2041 37.4073 22.0692C37.7648 21.8894 38.0999 21.7096 38.4126 21.5298C38.77 21.35 39.1051 21.1702 39.4179 20.9903C39.7753 20.8105 40.088 20.6981 40.3561 20.6532C40.4008 20.6532 40.4455 20.6532 40.4902 20.6532C40.5348 20.6082 40.5795 20.5858 40.6242 20.5858C40.9369 20.5858 41.1603 20.6981 41.2944 20.9229C41.4731 21.1477 41.5177 21.4399 41.4284 21.7995ZM29.0302 19.5069C28.7174 19.6867 28.3823 20.0239 28.0249 20.5183C27.6675 21.0128 27.3547 21.5747 27.0867 22.2041C26.8186 22.7884 26.6399 23.3953 26.5505 24.0246C26.4612 24.609 26.4835 25.081 26.6175 25.4406C26.7069 25.081 26.8856 24.609 27.1537 24.0246C27.4217 23.4403 27.8015 23.1481 28.293 23.1481C28.8291 23.1481 29.1642 23.4627 29.2982 24.0921C29.3429 23.7774 29.3876 23.4178 29.4323 23.0132C29.5216 22.6086 29.5663 22.2041 29.5663 21.7995C29.611 21.35 29.5886 20.9229 29.4993 20.5183C29.4099 20.1138 29.2536 19.7766 29.0302 19.5069ZM36.8042 15.6635C36.4468 16.068 36.1564 16.54 35.933 17.0795C35.7542 17.5739 35.6202 18.0909 35.5309 18.6303C35.4862 19.1248 35.4638 19.5743 35.4638 19.9789C35.4638 20.3835 35.4638 20.6757 35.4638 20.8555C35.9553 20.0913 36.3351 19.2597 36.6031 18.3606C36.8712 17.4616 36.9382 16.5625 36.8042 15.6635ZM27.9579 27.3287C27.9132 27.4635 27.8685 27.7557 27.8238 28.2052C27.7792 28.6548 27.8015 29.0593 27.8909 29.419C28.0249 29.0593 28.1589 28.6997 28.293 28.3401C28.4717 27.9355 28.6057 27.5534 28.6951 27.1938C28.5164 27.2388 28.36 27.2612 28.226 27.2612C28.1366 27.2612 28.0472 27.2837 27.9579 27.3287ZM29.1642 24.6315C28.8068 24.7214 28.561 24.9237 28.427 25.2384C28.3376 25.5081 28.2483 25.7553 28.1589 25.9801C28.293 25.9351 28.427 25.8902 28.561 25.8452C28.7397 25.8003 28.8961 25.7328 29.0302 25.6429C29.1195 25.3283 29.1419 25.1485 29.0972 25.1035C29.0972 25.0136 29.1195 24.8563 29.1642 24.6315Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M52.6334 20.5183C52.6334 20.878 52.544 21.3724 52.3653 22.0018C52.1866 22.5862 51.9185 23.1705 51.5611 23.7549C51.2484 24.3393 50.8463 24.8563 50.3548 25.3058C49.908 25.7104 49.4166 25.9127 48.8804 25.9127C48.6124 25.9127 48.3443 25.8452 48.0762 25.7104C47.9422 26.4296 47.8528 27.2163 47.8081 28.0704C47.7635 28.9245 47.8081 29.5988 47.9422 30.0933C48.0762 30.6776 48.2996 30.9698 48.6124 30.9698C48.7911 30.9698 48.9921 30.8575 49.2155 30.6327C49.841 30.0033 50.4442 29.2391 51.025 28.3401C51.6505 27.441 52.2983 26.542 52.9685 25.6429C53.2366 25.2833 53.6163 24.8113 54.1078 24.2269C54.5992 23.5976 55.1354 23.0132 55.7162 22.4738C56.297 21.8894 56.8778 21.3949 57.4587 20.9903C58.0842 20.5408 58.6203 20.3161 59.0671 20.3161C59.7819 20.3161 60.1394 20.7431 60.1394 21.5972C60.1394 22.0018 60.0723 22.6086 59.9383 23.4178C59.8489 24.182 59.7596 24.8563 59.6702 25.4406C59.849 25.126 60.1394 24.6765 60.5415 24.0921C60.9436 23.5077 61.368 22.9458 61.8148 22.4063C62.3063 21.822 62.7977 21.3275 63.2892 20.9229C63.7806 20.4734 64.2051 20.2486 64.5625 20.2486C65.0986 20.2486 65.4561 20.5633 65.6348 21.1926C65.7241 21.4623 65.7688 21.8444 65.7688 22.3389C65.8135 22.7884 65.8582 23.2829 65.9029 23.8224C65.9475 24.3618 66.0146 24.8787 66.1039 25.3732C66.1933 25.8677 66.305 26.2723 66.439 26.5869C66.7518 27.1713 67.1315 27.4635 67.5783 27.4635C67.9357 27.4635 68.3378 27.3511 68.7846 27.1264C69.2314 26.8567 69.6558 26.5645 70.0579 26.2498C70.5047 25.8902 70.9068 25.5306 71.2643 25.1709C71.6664 24.8113 71.9791 24.4966 72.2025 24.2269C72.3365 24.0921 72.4259 23.9797 72.4706 23.8898C72.5599 23.7999 72.627 23.71 72.6716 23.6201C73.0291 23.71 73.2078 23.8898 73.2078 24.1595C73.2524 24.3843 73.1408 24.6315 72.8727 24.9012C72.5599 25.2159 72.2025 25.5755 71.8004 25.9801C71.3983 26.3847 70.9515 26.7668 70.4601 27.1264C70.0133 27.486 69.5441 27.8007 69.0527 28.0704C68.5612 28.2951 68.0698 28.4075 67.5783 28.4075C67.2209 28.4075 66.8858 28.3401 66.573 28.2052C66.2603 28.0254 65.9922 27.6883 65.7688 27.1938C65.5008 26.7443 65.2997 26.2273 65.1657 25.6429C65.0763 25.0586 64.987 24.4966 64.8976 23.9572C64.8529 23.3728 64.8082 22.8559 64.7636 22.4063C64.7189 21.9119 64.6519 21.5522 64.5625 21.3275C63.2668 22.4063 62.1946 23.7325 61.3457 25.3058C60.4968 26.8791 59.7372 28.43 59.0671 29.9584C58.9777 30.2731 58.866 30.4753 58.732 30.5653C58.6426 30.6102 58.4639 30.6327 58.1959 30.6327C57.9278 30.4978 57.7714 30.3405 57.7267 30.1607C57.7267 29.9359 57.7714 29.6887 57.8608 29.419C58.0842 28.0704 58.3075 26.7218 58.5309 25.3732C58.799 24.0246 59.0447 22.6761 59.2681 21.3275C59.0001 21.3275 58.5756 21.5747 57.9948 22.0692C57.414 22.5187 56.8108 23.0806 56.1853 23.7549C55.6045 24.4292 55.0237 25.126 54.4429 25.8452C53.8621 26.5195 53.4376 27.0814 53.1695 27.5309C52.9461 27.8456 52.6781 28.2502 52.3653 28.7447C52.0526 29.2391 51.7175 29.7112 51.3601 30.1607C51.0026 30.6102 50.6452 31.0373 50.2878 31.4418C49.975 31.8015 49.6623 32.0487 49.3495 32.1836C49.0815 32.3184 48.8134 32.3858 48.5453 32.3858C47.9645 32.3858 47.4507 32.0712 47.0039 31.4418C46.6018 30.8575 46.3561 30.1157 46.2667 29.2167C46.1774 28.3176 46.1997 27.3961 46.3338 26.4521C46.4678 25.4631 46.6912 24.4966 47.0039 23.5526C47.3167 22.6086 47.6741 21.7995 48.0762 21.1252C48.3443 20.7206 48.724 20.2486 49.2155 19.7092C49.7516 19.1698 50.3325 18.9 50.958 18.9C51.1814 18.9 51.3377 18.9225 51.4271 18.9675C51.7845 19.0574 52.0749 19.2372 52.2983 19.5069C52.5217 19.7766 52.6334 20.1138 52.6334 20.5183ZM48.4113 24.7664C48.59 24.8563 48.724 24.9012 48.8134 24.9012C49.1708 24.9012 49.5059 24.7214 49.8187 24.3618C50.1314 23.9572 50.4218 23.5077 50.6899 23.0132C50.958 22.4738 51.1814 21.9568 51.3601 21.4623C51.5388 20.9229 51.6281 20.5408 51.6281 20.3161C51.3154 20.361 50.9803 20.5633 50.6229 20.9229C50.2655 21.2376 49.9304 21.6197 49.6176 22.0692C49.3049 22.5187 49.0368 22.9907 48.8134 23.4852C48.59 23.9797 48.456 24.4067 48.4113 24.7664Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M73.3292 29.2167C73.2399 29.2616 73.1058 29.2841 72.9271 29.2841C72.4357 29.2841 72.0782 29.0593 71.8548 28.6098C71.6315 28.1153 71.5868 27.5534 71.7208 26.9241C71.8102 26.2498 71.8995 25.7553 71.9889 25.4406C72.1229 25.0361 72.3016 24.4966 72.525 23.8224C72.7484 23.1481 73.0165 22.5187 73.3292 21.9343C73.6867 21.305 74.0888 20.7656 74.5355 20.3161C75.027 19.8665 75.5408 19.6418 76.077 19.6418C76.4791 19.6418 76.7471 19.8216 76.8812 20.1812C77.0599 20.4959 77.1716 20.833 77.2162 21.1926C77.4396 20.9229 77.596 20.6982 77.6854 20.5183C77.7747 20.2936 77.9311 20.0688 78.1545 19.844C78.2885 19.6193 78.4449 19.5069 78.6236 19.5069C78.713 19.5069 78.847 19.5519 79.0257 19.6418C79.3831 19.7766 79.4948 20.0688 79.3608 20.5183C79.2715 20.833 79.1821 21.1477 79.0927 21.4623C79.0481 21.7321 78.981 22.0243 78.8917 22.3389C78.6683 23.5077 78.5343 24.5416 78.4896 25.4406C78.4449 26.2947 78.5343 27.0589 78.7577 27.7332C78.8917 28.0929 79.1598 28.2727 79.5619 28.2727C79.8746 28.2727 80.1873 28.1828 80.5001 28.003C80.8129 27.8231 81.0586 27.6433 81.2373 27.4635C81.8628 26.8791 82.466 26.3172 83.0468 25.7778C83.6723 25.2384 84.2978 24.6765 84.9233 24.0921C85.0573 23.9572 85.169 23.8673 85.2583 23.8224C85.303 23.7325 85.37 23.665 85.4594 23.6201C85.9509 23.8448 86.1072 24.0696 85.9285 24.2944C85.7945 24.5191 85.6828 24.6765 85.5934 24.7664C84.3424 26.025 83.0468 27.2612 81.7064 28.475C81.0362 29.0593 80.3661 29.3515 79.6959 29.3515C78.8917 29.3515 78.2662 28.9694 77.8194 28.2052C77.596 27.7557 77.4173 27.2163 77.2833 26.5869C77.1939 25.9576 77.1939 25.1485 77.2833 24.1595C77.0152 24.5191 76.7248 24.9687 76.412 25.5081C76.0993 26.0475 75.7642 26.5869 75.4068 27.1264C75.094 27.6209 74.7589 28.0704 74.4015 28.475C74.0441 28.8795 73.6867 29.1268 73.3292 29.2167ZM75.9429 23.4852C75.9876 23.2155 76.0099 22.9233 76.0099 22.6086C76.0099 22.249 76.0323 21.9343 76.077 21.6646C76.077 21.5747 76.0546 21.4399 76.0099 21.2601C76.0099 21.0802 75.9652 20.9903 75.8759 20.9903C75.0717 21.8444 74.4685 22.8334 74.0664 23.9572C73.6643 25.081 73.3516 26.2273 73.1282 27.3961C73.6196 26.9016 74.1111 26.2723 74.6026 25.5081C75.094 24.7439 75.5408 24.0696 75.9429 23.4852Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M108.741 33.0863C108.428 33.7601 107.98 34.6586 107.397 35.7817C106.86 36.8598 106.232 38.0279 105.515 39.2857C104.799 40.5436 104.015 41.8014 103.163 43.0593C102.357 44.3172 101.506 45.4627 100.61 46.496C99.7138 47.5292 98.7954 48.3603 97.8545 48.9892C96.9585 49.6631 96.0849 50 95.2337 50C93.9793 50 93.016 49.3486 92.344 48.0458C91.4928 46.4286 91.0448 44.2722 91 41.5768C91 38.8814 91.2688 35.9389 91.8064 32.7493C92.344 29.5148 93.1504 26.2129 94.2257 22.8437C95.3009 19.4295 96.5105 16.2399 97.8545 13.2749C99.1986 10.265 100.655 7.63702 102.223 5.39083C103.791 3.14465 105.336 1.54986 106.86 0.606469C107.532 0.202156 108.248 0 109.01 0C109.637 0 110.197 0.157232 110.69 0.471696C111.183 0.786163 111.541 1.30278 111.765 2.02156C111.9 2.60557 111.967 3.27942 111.967 4.04313C112.012 4.7619 112.034 5.48068 112.034 6.19946C112.034 6.87332 112.034 7.52471 112.034 8.15364C112.034 8.73765 112.079 9.20934 112.168 9.56873C112.258 9.83827 112.213 10.0854 112.034 10.31C111.855 10.4897 111.653 10.5795 111.429 10.5795C111.205 10.5795 111.026 10.4447 110.892 10.1752C110.668 9.59119 110.533 8.96226 110.488 8.28841C110.444 7.56963 110.421 6.87332 110.421 6.19946C110.466 5.48068 110.488 4.80683 110.488 4.1779C110.488 3.50404 110.399 2.92003 110.22 2.42587C110.04 1.88679 109.682 1.61725 109.144 1.61725C108.696 1.61725 108.159 1.81941 107.532 2.22372C106.232 3.07727 104.888 4.60467 103.499 6.80593C102.111 8.96226 100.789 11.5004 99.5346 14.4205C98.2801 17.2956 97.1377 20.3729 96.1073 23.6523C95.1217 26.9317 94.3377 30.1213 93.7553 33.221C93.2176 36.2758 92.9488 39.0836 92.9488 41.6442C92.9936 44.2049 93.4416 46.1815 94.2929 47.5741C94.4721 47.9335 94.7857 48.1132 95.2337 48.1132C95.5921 48.1132 95.9729 48.0009 96.3761 47.7763C96.8241 47.5966 97.1601 47.3944 97.3841 47.1698C98.5938 46.0916 99.7138 44.8562 100.744 43.4636C101.775 42.0261 102.738 40.5436 103.634 39.0162C104.575 37.4438 105.426 35.8715 106.188 34.2992C106.994 32.6819 107.733 31.177 108.405 29.7844C108.719 29.1105 108.898 28.4816 108.943 27.8976C109.032 25.4717 109.57 23.1132 110.556 20.8221C109.391 21.3612 108.338 21.9677 107.397 22.6415C106.501 23.3154 105.717 24.1465 105.045 25.1348C105.224 25.4043 105.224 25.6963 105.045 26.0108C104.911 26.2803 104.687 26.4376 104.373 26.4825C103.88 26.5723 103.611 26.3477 103.567 25.8086C103.567 25.2695 103.701 24.8203 103.97 24.4609C104.776 23.3827 105.74 22.4169 106.86 21.5633C108.024 20.7098 109.256 19.991 110.556 19.407C111.9 18.823 113.266 18.3962 114.655 18.1267C116.089 17.8122 117.477 17.655 118.821 17.655C119.717 17.655 120.569 17.7224 121.375 17.8571C121.778 17.947 121.913 18.1716 121.778 18.531C121.733 18.6658 121.621 18.7332 121.442 18.7332H121.039C120.77 18.6882 120.501 18.6658 120.233 18.6658C119.964 18.6658 119.673 18.6658 119.359 18.6658C118.284 18.6658 117.186 18.7556 116.066 18.9353C114.991 19.115 114.072 19.3845 113.311 19.7439C113.356 21.451 113.042 23.1132 112.37 24.7305C111.698 26.3028 111.026 27.8751 110.354 29.4474C110.264 29.6271 110.175 29.8068 110.085 29.9865C110.04 30.1662 110.018 30.3684 110.018 30.593C110.018 32.1653 110.063 33.6703 110.152 35.1078C110.287 36.5454 110.556 38.0279 110.959 39.5553C111.093 39.9596 111.026 40.2291 110.757 40.3639C110.668 40.4088 110.578 40.4313 110.488 40.4313C110.175 40.4313 109.906 40.0943 109.682 39.4205C109.458 38.7466 109.279 37.9829 109.144 37.1294C109.01 36.2758 108.898 35.4672 108.808 34.7035C108.764 33.8949 108.741 33.3558 108.741 33.0863Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M118.921 29.717C118.787 30.0314 118.652 30.4133 118.518 30.8625C118.428 31.3118 118.204 31.6038 117.846 31.7385C117.801 31.7385 117.756 31.761 117.711 31.8059C117.667 31.8059 117.622 31.8059 117.577 31.8059C117.174 31.8059 116.927 31.5364 116.838 30.9973C116.748 29.7844 116.748 28.5265 116.838 27.2237C116.883 25.9209 116.95 24.6631 117.039 23.4501C117.039 23.2704 117.039 23.0458 117.039 22.7763C117.084 22.4618 117.129 22.1698 117.174 21.9003C117.219 21.6307 117.286 21.4061 117.375 21.2264C117.51 21.0467 117.711 20.9569 117.98 20.9569C118.339 21.0018 118.608 21.1815 118.787 21.496C118.966 21.7655 118.944 22.0575 118.72 22.372C118.675 22.4169 118.63 22.7089 118.585 23.248C118.54 23.7421 118.496 24.3037 118.451 24.9326C118.406 25.5166 118.384 26.1006 118.384 26.6846C118.384 27.2237 118.384 27.5831 118.384 27.7628C118.742 27.1339 119.19 26.46 119.728 25.7412C120.265 24.9775 120.848 24.3037 121.475 23.7197C122.102 23.0907 122.774 22.5741 123.491 22.1698C124.252 21.7655 125.014 21.5633 125.776 21.5633C126.448 21.5633 127.097 21.7206 127.724 22.035C127.904 22.1249 127.949 22.2597 127.859 22.4394C127.814 22.619 127.702 22.7089 127.523 22.7089C127.388 22.7089 127.299 22.6864 127.254 22.6415C126.851 22.5067 126.425 22.4394 125.977 22.4394C125.126 22.4394 124.32 22.7089 123.558 23.248C122.796 23.7421 122.124 24.3711 121.542 25.1348C120.96 25.8535 120.444 26.6397 119.996 27.4933C119.548 28.3468 119.19 29.088 118.921 29.717Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M134.847 24.0566C135.34 24.1465 135.519 24.3037 135.385 24.5283C135.295 24.7529 135.206 24.9102 135.116 25C134.444 25.9434 133.682 26.9542 132.831 28.0323C131.98 29.0656 131.241 29.8068 130.614 30.2561C130.255 30.4807 129.942 30.593 129.673 30.593C129.09 30.593 128.665 30.2785 128.396 29.6496C128.217 29.2902 128.082 28.841 127.993 28.3019C127.903 27.7179 127.881 27.1339 127.926 26.5499C127.926 25.9209 127.97 25.3369 128.06 24.7978C128.15 24.2138 128.284 23.7421 128.463 23.3827C128.598 23.1581 128.799 23.0458 129.068 23.0458C129.337 23.0458 129.538 23.1357 129.673 23.3154C129.807 23.54 129.807 23.7871 129.673 24.0566C129.583 24.3261 129.516 24.5732 129.471 24.7978C129.382 25.5166 129.314 26.3028 129.27 27.1563C129.27 27.965 129.449 28.6613 129.807 29.2453C130.39 28.8859 131.062 28.3243 131.823 27.5606C132.585 26.752 133.593 25.584 134.847 24.0566ZM129.874 20.6199C129.785 20.7996 129.695 20.9793 129.606 21.159C129.561 21.2938 129.449 21.3612 129.27 21.3612H129.068C128.844 21.2713 128.732 21.0916 128.732 20.8221C128.777 20.5526 128.844 20.3279 128.934 20.1482C129.068 19.699 129.202 19.2947 129.337 18.9353C129.471 18.531 129.606 18.0818 129.74 17.5876C129.785 17.4528 129.852 17.3405 129.942 17.2507C130.076 17.1159 130.21 17.071 130.345 17.1159C130.703 17.2507 130.793 17.5202 130.614 17.9245C130.524 18.3288 130.412 18.8005 130.278 19.3396C130.143 19.8338 130.009 20.2606 129.874 20.6199Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M136.37 22.2372C136.28 23.4052 136.191 24.5283 136.101 25.6065C136.011 26.6846 135.944 27.8077 135.899 28.9757C136.571 27.3585 137.266 25.7412 137.983 24.124C138.699 22.5067 139.551 20.9569 140.536 19.4744C140.626 19.2947 140.76 19.115 140.94 18.9353C141.119 18.7556 141.32 18.6658 141.544 18.6658C142.082 18.6658 142.351 18.9353 142.351 19.4744C142.351 20.4178 142.284 21.496 142.149 22.7089C142.06 23.9218 142.127 25.0898 142.351 26.2129C142.44 26.7071 142.597 26.9542 142.821 26.9542C142.956 26.9542 143.18 26.8419 143.493 26.6172C143.807 26.3926 144.076 26.1905 144.3 26.0108C144.524 25.7862 144.815 25.5615 145.173 25.3369C145.352 25.1572 145.554 25.0674 145.778 25.0674C146.136 25.0674 146.383 25.3145 146.517 25.8086C146.696 26.168 146.808 26.5499 146.853 26.9542C146.943 27.3585 147.1 27.7403 147.324 28.0997C147.592 28.6388 147.973 28.9084 148.466 28.9084C148.69 28.9084 148.981 28.796 149.34 28.5714C150.012 28.0773 150.594 27.4708 151.087 26.752C151.625 26.0332 152.14 25.3369 152.633 24.6631C152.677 24.5732 152.722 24.5058 152.767 24.4609C152.812 24.416 152.857 24.3486 152.901 24.2588C152.991 24.2138 153.058 24.1465 153.103 24.0566C153.73 24.1015 153.865 24.4385 153.506 25.0674C153.013 25.7862 152.409 26.6172 151.692 27.5606C150.975 28.504 150.281 29.1779 149.609 29.5822C149.161 29.8068 148.757 29.9191 148.399 29.9191C147.637 29.9191 147.055 29.6047 146.652 28.9757C146.338 28.5265 146.136 28.0548 146.047 27.5606C146.002 27.0665 145.868 26.5723 145.644 26.0782C145.285 26.3926 144.949 26.7071 144.636 27.0216C144.367 27.336 144.008 27.628 143.56 27.8976C143.292 28.0323 143.045 28.0997 142.821 28.0997C142.373 28.0997 141.97 27.8302 141.612 27.2911C141.208 26.6172 141.007 25.6289 141.007 24.3261C141.007 22.9784 141.052 21.7655 141.141 20.6873C140.245 22.3046 139.461 23.9892 138.789 25.7412C138.117 27.4483 137.49 29.1779 136.907 30.9299C136.773 31.2893 136.639 31.6936 136.504 32.1429C136.37 32.5921 136.191 32.9515 135.967 33.221C135.787 33.4906 135.541 33.6253 135.227 33.6253C134.914 33.6253 134.667 33.4232 134.488 33.0189C134.354 32.7044 134.287 32.0755 134.287 31.1321C134.287 30.1887 134.331 29.133 134.421 27.965C134.466 26.7969 134.555 25.6289 134.69 24.4609C134.779 23.2929 134.869 22.327 134.959 21.5633C134.959 21.3387 135.026 21.0916 135.16 20.8221C135.295 20.5076 135.541 20.3729 135.899 20.4178C136.482 20.5076 136.706 20.7547 136.571 21.159C136.437 21.5633 136.37 21.9227 136.37 22.2372Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M154.747 21.2938C155.016 20.9793 155.307 20.7547 155.62 20.6199C155.979 20.4403 156.292 20.3504 156.561 20.3504C157.144 20.3504 157.435 20.6424 157.435 21.2264C157.435 21.451 157.457 21.6532 157.502 21.8329C157.592 21.6981 157.659 21.5858 157.704 21.496C157.748 21.3612 157.816 21.2264 157.905 21.0916C157.995 20.9119 158.107 20.7323 158.241 20.5526C158.42 20.3729 158.622 20.283 158.846 20.283C158.98 20.283 159.092 20.3055 159.182 20.3504C159.541 20.4852 159.697 20.7098 159.653 21.0243C159.653 21.3387 159.608 21.6307 159.518 21.9003C159.294 22.664 159.092 23.4501 158.913 24.2588C158.779 25.0674 158.689 25.8985 158.644 26.752C158.644 26.8419 158.644 27.0665 158.644 27.4259C158.644 27.7403 158.667 28.0773 158.712 28.4367C158.801 28.7511 158.891 29.0431 158.98 29.3127C159.115 29.5822 159.316 29.717 159.585 29.717C159.675 29.717 159.809 29.6721 159.989 29.5822C160.705 29.2228 161.422 28.6388 162.139 27.8302C162.901 26.9766 163.617 26.0108 164.289 24.9326C165.006 23.8544 165.678 22.7314 166.305 21.5633C166.977 20.3953 167.56 19.2722 168.053 18.1941C168.142 18.1042 168.187 17.9021 168.187 17.5876C168.321 16.2848 168.478 15.0045 168.657 13.7466C168.881 12.4888 169.173 11.2309 169.531 9.97305C169.621 9.65858 169.778 9.16442 170.002 8.49057C170.226 7.81671 170.494 7.14286 170.808 6.469C171.166 5.79515 171.525 5.21114 171.883 4.71698C172.286 4.1779 172.69 3.90835 173.093 3.90835C173.541 3.90835 173.81 4.13297 173.899 4.58221C174.034 5.16621 174.034 5.77268 173.899 6.40161C173.81 7.03055 173.653 7.74932 173.429 8.55795C173.07 9.86073 172.645 11.1411 172.152 12.3989C171.659 13.6119 171.144 14.8248 170.606 16.0377C170.472 16.3971 170.315 16.7341 170.136 17.0485C170.002 17.3181 169.867 17.6101 169.733 17.9245C169.509 18.3738 169.397 18.7781 169.397 19.1375C169.262 20.9344 169.195 22.8661 169.195 24.9326C169.195 26.9542 169.217 28.9533 169.262 30.9299C169.352 32.8616 169.464 34.681 169.598 36.3881C169.778 38.0952 169.957 39.4879 170.136 40.566C170.226 40.8356 170.136 40.9928 169.867 41.0377C169.598 41.0377 169.419 40.9479 169.329 40.7682C168.926 39.6002 168.635 38.2525 168.456 36.7251C168.277 35.1527 168.142 33.5355 168.053 31.8733C168.008 30.1662 167.963 28.4367 167.918 26.6846C167.918 24.8877 167.918 23.1806 167.918 21.5633C167.515 22.2372 167.022 23.0683 166.44 24.0566C165.902 25.0449 165.275 26.0332 164.558 27.0216C163.886 27.965 163.169 28.8185 162.408 29.5822C161.646 30.3459 160.885 30.8401 160.123 31.0647C159.854 31.1545 159.63 31.1995 159.451 31.1995C158.689 31.1995 158.084 30.7727 157.636 29.9191C157.502 29.6496 157.368 29.1105 157.233 28.3019C157.099 27.4483 157.076 26.5723 157.166 25.6739C156.673 26.3028 156.248 26.9093 155.889 27.4933C155.531 28.0323 154.948 28.549 154.142 29.0431C153.963 29.1779 153.761 29.2453 153.537 29.2453C153.268 29.2453 153.044 29.133 152.865 28.9084C152.641 28.6837 152.507 28.4142 152.462 28.0997C152.372 27.6056 152.372 27.0665 152.462 26.4825C152.552 25.8535 152.708 25.2246 152.932 24.5957C153.156 23.9668 153.425 23.3603 153.739 22.7763C154.052 22.1923 154.388 21.6981 154.747 21.2938ZM154.142 26.9542C154.635 26.46 155.06 25.9434 155.419 25.4043C155.777 24.8652 156.136 24.3037 156.494 23.7197C156.315 23.4951 156.203 23.3603 156.158 23.3154C156.113 23.2255 156.113 22.7763 156.158 21.9677C155.934 22.1473 155.688 22.4618 155.419 22.9111C155.195 23.3603 154.971 23.8544 154.747 24.3935C154.523 24.8877 154.344 25.3818 154.209 25.876C154.12 26.3252 154.097 26.6846 154.142 26.9542ZM172.622 5.72776C171.95 6.89578 171.413 8.15364 171.01 9.50135C170.606 10.8491 170.293 12.1743 170.069 13.4771C170.696 12.2192 171.211 10.9838 171.614 9.77089C172.062 8.51303 172.398 7.16532 172.622 5.72776Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M205.692 19C201.607 19 197.046 23.4738 195.49 25.1366C193.934 23.4731 189.373 19 185.287 19C180.724 19 178 21.6977 178 26.217C178 30.7363 180.724 33.434 185.287 33.434C189.373 33.434 193.934 28.9602 195.49 27.2974C197.046 28.9609 201.607 33.434 205.692 33.434C210.256 33.434 212.98 30.7363 212.98 26.217C212.98 21.6977 210.256 19 205.692 19ZM185.287 31.9906C180.215 31.9906 179.457 28.3734 179.457 26.217C179.457 24.0605 180.215 20.4434 185.287 20.4434C188.831 20.4434 193.159 24.7671 194.511 26.217C193.16 27.6676 188.836 31.9906 185.287 31.9906ZM205.692 31.9906C202.149 31.9906 197.82 27.6669 196.469 26.217C197.82 24.7664 202.144 20.4434 205.692 20.4434C210.764 20.4434 211.522 24.0605 211.522 26.217C211.522 28.3734 210.764 31.9906 205.692 31.9906Z"
      fill="url(#paint0_linear_41_22)"
    />
    <path
      d="M215.713 19C211.627 19 207.066 23.4738 205.51 25.1366C203.954 23.4731 199.393 19 195.308 19C190.744 19 188.02 21.6977 188.02 26.217C188.02 30.7363 190.744 33.434 195.308 33.434C199.393 33.434 203.954 28.9602 205.51 27.2974C207.066 28.9609 211.627 33.434 215.713 33.434C220.276 33.434 223 30.7363 223 26.217C223 21.6977 220.276 19 215.713 19ZM195.308 31.9906C190.236 31.9906 189.478 28.3734 189.478 26.217C189.478 24.0605 190.236 20.4434 195.308 20.4434C198.851 20.4434 203.18 24.7671 204.531 26.217C203.18 27.6676 198.856 31.9906 195.308 31.9906ZM215.713 31.9906C212.169 31.9906 207.841 27.6669 206.489 26.217C207.84 24.7664 212.164 20.4434 215.713 20.4434C220.785 20.4434 221.543 24.0605 221.543 26.217C221.543 28.3734 220.785 31.9906 215.713 31.9906Z"
      fill="url(#paint1_linear_41_22)"
    />
    <path
      d="M132.66 52.34C132.66 52.92 132.46 53.4033 132.06 53.79C131.667 54.17 131.063 54.36 130.25 54.36H128.91V57.27H128V50.3H130.25C131.037 50.3 131.633 50.49 132.04 50.87C132.453 51.25 132.66 51.74 132.66 52.34ZM130.25 53.61C130.757 53.61 131.13 53.5 131.37 53.28C131.61 53.06 131.73 52.7467 131.73 52.34C131.73 51.48 131.237 51.05 130.25 51.05H128.91V53.61H130.25Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M141.001 57.34C140.541 57.34 140.128 57.26 139.761 57.1C139.401 56.9333 139.118 56.7067 138.911 56.42C138.704 56.1267 138.598 55.79 138.591 55.41H139.561C139.594 55.7367 139.728 56.0133 139.961 56.24C140.201 56.46 140.548 56.57 141.001 56.57C141.434 56.57 141.774 56.4633 142.021 56.25C142.274 56.03 142.401 55.75 142.401 55.41C142.401 55.1433 142.328 54.9267 142.181 54.76C142.034 54.5933 141.851 54.4667 141.631 54.38C141.411 54.2933 141.114 54.2 140.741 54.1C140.281 53.98 139.911 53.86 139.631 53.74C139.358 53.62 139.121 53.4333 138.921 53.18C138.728 52.92 138.631 52.5733 138.631 52.14C138.631 51.76 138.728 51.4233 138.921 51.13C139.114 50.8367 139.384 50.61 139.731 50.45C140.084 50.29 140.488 50.21 140.941 50.21C141.594 50.21 142.128 50.3733 142.541 50.7C142.961 51.0267 143.198 51.46 143.251 52H142.251C142.218 51.7333 142.078 51.5 141.831 51.3C141.584 51.0933 141.258 50.99 140.851 50.99C140.471 50.99 140.161 51.09 139.921 51.29C139.681 51.4833 139.561 51.7567 139.561 52.11C139.561 52.3633 139.631 52.57 139.771 52.73C139.918 52.89 140.094 53.0133 140.301 53.1C140.514 53.18 140.811 53.2733 141.191 53.38C141.651 53.5067 142.021 53.6333 142.301 53.76C142.581 53.88 142.821 54.07 143.021 54.33C143.221 54.5833 143.321 54.93 143.321 55.37C143.321 55.71 143.231 56.03 143.051 56.33C142.871 56.63 142.604 56.8733 142.251 57.06C141.898 57.2467 141.481 57.34 141.001 57.34Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M150.57 50.3V57.27H149.66V50.3H150.57Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M156.781 53.78C156.781 53.1 156.934 52.49 157.241 51.95C157.548 51.4033 157.964 50.9767 158.491 50.67C159.024 50.3633 159.614 50.21 160.261 50.21C161.021 50.21 161.684 50.3933 162.251 50.76C162.818 51.1267 163.231 51.6467 163.491 52.32H162.401C162.208 51.9 161.928 51.5767 161.561 51.35C161.201 51.1233 160.768 51.01 160.261 51.01C159.774 51.01 159.338 51.1233 158.951 51.35C158.564 51.5767 158.261 51.9 158.041 52.32C157.821 52.7333 157.711 53.22 157.711 53.78C157.711 54.3333 157.821 54.82 158.041 55.24C158.261 55.6533 158.564 55.9733 158.951 56.2C159.338 56.4267 159.774 56.54 160.261 56.54C160.768 56.54 161.201 56.43 161.561 56.21C161.928 55.9833 162.208 55.66 162.401 55.24H163.491C163.231 55.9067 162.818 56.4233 162.251 56.79C161.684 57.15 161.021 57.33 160.261 57.33C159.614 57.33 159.024 57.18 158.491 56.88C157.964 56.5733 157.548 56.15 157.241 55.61C156.934 55.07 156.781 54.46 156.781 53.78Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M173.006 57.34C172.359 57.34 171.769 57.19 171.236 56.89C170.702 56.5833 170.279 56.16 169.966 55.62C169.659 55.0733 169.506 54.46 169.506 53.78C169.506 53.1 169.659 52.49 169.966 51.95C170.279 51.4033 170.702 50.98 171.236 50.68C171.769 50.3733 172.359 50.22 173.006 50.22C173.659 50.22 174.252 50.3733 174.786 50.68C175.319 50.98 175.739 51.4 176.046 51.94C176.352 52.48 176.506 53.0933 176.506 53.78C176.506 54.4667 176.352 55.08 176.046 55.62C175.739 56.16 175.319 56.5833 174.786 56.89C174.252 57.19 173.659 57.34 173.006 57.34ZM173.006 56.55C173.492 56.55 173.929 56.4367 174.316 56.21C174.709 55.9833 175.016 55.66 175.236 55.24C175.462 54.82 175.576 54.3333 175.576 53.78C175.576 53.22 175.462 52.7333 175.236 52.32C175.016 51.9 174.712 51.5767 174.326 51.35C173.939 51.1233 173.499 51.01 173.006 51.01C172.512 51.01 172.072 51.1233 171.686 51.35C171.299 51.5767 170.992 51.9 170.766 52.32C170.546 52.7333 170.436 53.22 170.436 53.78C170.436 54.3333 170.546 54.82 170.766 55.24C170.992 55.66 171.299 55.9833 171.686 56.21C172.079 56.4367 172.519 56.55 173.006 56.55ZM174.006 48.79L171.876 49.93V49.25L174.006 48V48.79Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M183.617 56.53H186.057V57.27H182.707V50.3H183.617V56.53Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M195.183 57.34C194.537 57.34 193.947 57.19 193.413 56.89C192.88 56.5833 192.457 56.16 192.143 55.62C191.837 55.0733 191.683 54.46 191.683 53.78C191.683 53.1 191.837 52.49 192.143 51.95C192.457 51.4033 192.88 50.98 193.413 50.68C193.947 50.3733 194.537 50.22 195.183 50.22C195.837 50.22 196.43 50.3733 196.963 50.68C197.497 50.98 197.917 51.4 198.223 51.94C198.53 52.48 198.683 53.0933 198.683 53.78C198.683 54.4667 198.53 55.08 198.223 55.62C197.917 56.16 197.497 56.5833 196.963 56.89C196.43 57.19 195.837 57.34 195.183 57.34ZM195.183 56.55C195.67 56.55 196.107 56.4367 196.493 56.21C196.887 55.9833 197.193 55.66 197.413 55.24C197.64 54.82 197.753 54.3333 197.753 53.78C197.753 53.22 197.64 52.7333 197.413 52.32C197.193 51.9 196.89 51.5767 196.503 51.35C196.117 51.1233 195.677 51.01 195.183 51.01C194.69 51.01 194.25 51.1233 193.863 51.35C193.477 51.5767 193.17 51.9 192.943 52.32C192.723 52.7333 192.613 53.22 192.613 53.78C192.613 54.3333 192.723 54.82 192.943 55.24C193.17 55.66 193.477 55.9833 193.863 56.21C194.257 56.4367 194.697 56.55 195.183 56.55Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M210.165 52.32C209.971 51.9133 209.691 51.6 209.325 51.38C208.958 51.1533 208.531 51.04 208.045 51.04C207.558 51.04 207.118 51.1533 206.725 51.38C206.338 51.6 206.031 51.92 205.805 52.34C205.585 52.7533 205.475 53.2333 205.475 53.78C205.475 54.3267 205.585 54.8067 205.805 55.22C206.031 55.6333 206.338 55.9533 206.725 56.18C207.118 56.4 207.558 56.51 208.045 56.51C208.725 56.51 209.285 56.3067 209.725 55.9C210.165 55.4933 210.421 54.9433 210.495 54.25H207.715V53.51H211.465V54.21C211.411 54.7833 211.231 55.31 210.925 55.79C210.618 56.2633 210.215 56.64 209.715 56.92C209.215 57.1933 208.658 57.33 208.045 57.33C207.398 57.33 206.808 57.18 206.275 56.88C205.741 56.5733 205.318 56.15 205.005 55.61C204.698 55.07 204.545 54.46 204.545 53.78C204.545 53.1 204.698 52.49 205.005 51.95C205.318 51.4033 205.741 50.98 206.275 50.68C206.808 50.3733 207.398 50.22 208.045 50.22C208.785 50.22 209.438 50.4033 210.005 50.77C210.578 51.1367 210.995 51.6533 211.255 52.32H210.165Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <path
      d="M221.788 55.72H218.748L218.188 57.27H217.228L219.748 50.34H220.798L223.308 57.27H222.348L221.788 55.72ZM221.528 54.98L220.268 51.46L219.008 54.98H221.528Z"
      fill={`${isNegative ? '#fff' : '#4F4F4F'}`}
    />
    <defs>
      <linearGradient
        id="paint0_linear_41_22"
        x1="181.068"
        y1="19"
        x2="218.909"
        y2="19"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F937CE" />
        <stop offset="1" stop-color="#FFC436" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_41_22"
        x1="181.068"
        y1="19"
        x2="218.909"
        y2="19"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F937CE" />
        <stop offset="1" stop-color="#FFC436" />
      </linearGradient>
    </defs>
  </svg>
)
