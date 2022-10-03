$(document).ready(function(){
	$('.nama_mhs').click(function(){
		let isi = $(this).text();
		let isi2 = prompt('ubah dengan:',isi);
		if (!isi2) return;
		$(this).text(isi2);
	})
	$('.alamat_mhs').click(function(){
		let isi = $(this).text();
		let isi2 = prompt('ubah alamat:',isi);
		if (!isi2) return;
		$(this).text(isi2);
	})
	$('.hapus').click(function(){
		let yakin = confirm('yakin ingin menghapus?');
		if (!yakin)return;
		let id = $(this).prop('id');
		let rid = id.split('__');
		let baris_ke = rid[1];
		$('#row__'+baris_ke).slideUp()
	})
	})